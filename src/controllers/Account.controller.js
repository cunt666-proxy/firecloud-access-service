import Account from '../models/Account.model';
import Token from '../models/Token.model';
import { Crypto } from 'firecloud-router';

export default {
  Create: async (req, res, env)=>{
    try{
      const counter = await req.collections.account.count();
      if(!env.registration_enabled && counter) throw new Error('Registration disabled');
      const { username, password } = req.content;
      if(await req.collections.account.findOne({ username })) throw new Error('Internal server error');
      req.account = Account({ isRoot: !counter, username, password: Crypto.hashSync(password) });
      await req.account.validate();
      req.account = req.account.toObject();
      req.account.keys = {
        default: { privateKey: Crypto.encryptSync(req.account.keys.default.privateKey, env.app_secret), publicKey: Crypto.encryptSync(req.account.keys.default.publicKey, env.app_secret) },
        kyber: { privateKey: Crypto.encryptSync(req.account.keys.kyber.privateKey, env.app_secret), publicKey: Crypto.encryptSync(req.account.keys.kyber.publicKey, env.app_secret) }
      };
      req.account = await req.collections.account.findOne({ _id: (await req.collections.account.insertOne(req.account)).insertedId });
      let token = Token({ account: req.account._id, expiredAt: Math.floor(Date.now() / 1000) + 86400 });
      await token.validate();
            token = token.toObject();
      await req.collections.token.insertOne(token);
      req.account.tokens = {
        access: await Crypto.jwt.Encrypt(token, env.SECRET.ACCESS, '1h'),
        refresh: await Crypto.jwt.Encrypt(token, env.SECRET.REFRESH, token.expiredAt)
      };
      return res.json(req.account);
    }catch(err){
      return res.error(req, env, 400, err?.message);
    }
  },
  Read: async (req, res, env)=>{
    try{
      const response = req.params?.id ?
                        await req.collections.account.findOne({ _id: Crypto.ObjectId(req.params.id) }):
                        await req.collections.account.find({});
      return res.json(response);
    }catch(err){
      return res.error(req, env, 400, err?.message);
    }
  },
  Update: async (req, res, env)=>{
    try{
      const { username, password, policy } = req.content;
      const target = req.params?.id ? await req.collections.account.findOne({ _id: Crypto.ObjectId(req.params.id) }) : req.account;
      if(!target) throw new Error('Account does not exist');
      if(username && await req.collections.account.findOne({ username })) throw new Error('Internal server error');
      let payload = target;
          payload.policy = req.account.rights && policy ? policy : target.policy;
          payload.password = password ?  Crypto.hashSync(password) : target.password;
          payload.username = username || target.username
      let account = Account({ ...payload, updatedAt: Date.now() });
      await account.validate();
            account = account.toObject();
      await req.collections.account.updateOne({ _id: target._id }, { $set: account });
      return res.json(account);
    }catch(err){
      return res.error(req, env, 400, err?.message);
    }
  },
  Delete: async (req, res, env)=>{
    try{
      const target = req.params?.id ? await req.collections.account.findOne({ _id: Crypto.ObjectId(req.params.id) }) : req.account;
      if(!target || target.isRoot || (!req.account.rights && req.account.isVerified)) throw new Error('Account cannot be deleted.');
      await req.collections.account.deleteOne({ _id: target._id });
      await req.collections.token.deleteMany({ account: target._id });
      return res.json({ status: true });
    }catch(err){
      return res.error(req, env, 400, err?.message);
    }
  }
}
