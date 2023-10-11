import Token from '../models/Token.model';
import { Crypto } from 'firecloud-router';

export default {
  Local: async (req, res, env)=>{
    try{
      req.account = await req.collections.account.findOne({ username: req.content.username });
      if(!req?.account || !Crypto.compareSync(req.content.password, req.account.password)) throw new Error();
      let token = Token({ account: req.account._id, policy: req.account.policy, expiredAt: Math.floor(Date.now() / 1000) + 86400 });
      await token.validate();
            token = token.toObject();
      await req.collections.token.insertOne(token);
      req.account.token = {
        access: await Crypto.jwt.Encrypt(token, env.SECRET.ACCESS, '1h'),
        refresh: await Crypto.jwt.Encrypt(token, env.SECRET.REFRESH, token.expiredAt)
      };
      await req.collections.account.updateOne({ _id: req.account._id }, { $set: { lastLoggedIn: Date.now() } });
      return res.json(req.account);
    }catch(err){
      return res.error(req, env, 400, "Bad credentials");
    }
  },
  Access: async (req, res, env)=>{
    try{
      await req.collections.account.updateOne({ _id: req.account._id }, { $set: { lastLoggedIn: Date.now() } });
      return res.json(req.account);
    }catch(err){
      return res.error(req, env, 400, err?.message);
    }
  },
  Refresh: async (req, res, env)=>{
    try{
      let token = req.headers.get('Authorization');
      if(!token) throw new Error('Authorization required');
      token = await Crypto.jwtDecrypt(token, env.SECRET.REFRESH);
      req.account = await req.collections.account.findOne({ _id: Crypto.ObjectId(token.account) });
      if(!req.account||!await req.collections.token.findOne({ account: req.account._id, salt: token?.salt })) throw new Error('Token expired');
      await req.collections.token.deleteMany({ account: req.account._id, salt: token.salt });
            token = Token({ account: req.account._id, policy: req.account.policy, expiredAt: Math.floor(Date.now() / 1000) + 86400 });
      await token.validate();
            token = token.toObject();
      await req.collections.token.insertOne(token);
      req.account.token = {
        access: await Crypto.jwt.Encrypt(token, env.SECRET.ACCESS, '1h'),
        refresh: await Crypto.jwt.Encrypt(token, env.SECRET.REFRESH, token.expiredAt)
      };
      await req.collections.account.updateOne({ _id: req.account._id }, { $set: { lastLoggedIn: Date.now() } });
      return res.json(req.account);
    }catch(err){
      return res.error(req, env, 400, err?.message);
    }
  }
}
