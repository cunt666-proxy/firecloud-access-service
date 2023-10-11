import Token from '../models/Token.model.js';
import { Crypto } from 'firecloud-router';

export default {
  Create: async (req, res, env)=>{
    try{
      if(req.account?.owner) throw new Error('Authorization required');
      if(req.content?.policy && ! await req.collections.policy.findOne({ _id: Crypto.ObjectId(req.content.policy), owner: req.account._id })) throw new Error('Policy not found');
      let token = Token({
        owner: req.account._id,
        account: req.account._id,
        policy: req.content?.policy ? Crypto.ObjectId(req.content.policy) : undefined,
        oneTime: req.content?.oneTime,
        expiredAt: Math.floor(Date.now() / 1000) + (req.account?.owner ? req.account?.expiredAt || 0 : req.content?.expiredAt || 3600)
      });
      await token.validate();
            token = token.toObject();
      await req.collections.token.insertOne(token);
      const response = { token: await Crypto.jwt.Encrypt(token, env.SECRET.ACCESS, token.expiredAt) };
      return res.json(response);
    }catch(err){
      return res.error(req, env, 400, err?.message);
    }
  },
  Read: async (req, res, env)=>{
    try{
      const result = req.params?.id ?
                 await req.collections.token.find({ account: req.account._id, _id: Crypto.ObjectId(req.params.id) }):
                 await req.collections.token.find({ account: req.account._id });
      return res.json(result);
    }catch(err){
      return res.error(req, env, 400, err?.message);
    }
  },
  Delete: async (req, res, env)=>{
    try{
      await req.collections.token.deleteMany({ account: req.account._id, _id: Crypto.ObjectId(req.params.id)});
      return res.json({ status: true });
    }catch(err){
      return res.error(req, env, 400, err?.message);
    }
  }
}
