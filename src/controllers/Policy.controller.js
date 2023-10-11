import Policy from '../models/Policy.model.js';
import { Crypto, Ability } from 'firecloud-router';

export default {
  Create: async (req, res, env)=>{
    try{
      const ability = Ability();
      req.content.rules.forEach(({ action, subject }) => (req.account.isRoot || req.account?.rights || req.account.policy.can(action, subject)) && ability.can(action, subject));
      let policy = Policy({ rules: ability.rules, owner: req.account._id });
          await policy.validate();
          policy = policy.toObject();
      await req.collections.policy.insertOne(policy);
      return res.json(policy);
    }catch(err){
      return res.error(req, env, 400, err?.message);
    }
  },
  Read: async (req, res, env)=>{
    try{
      let query = req.account?.rights ? {} : { owner: req.account._id };
      if(req?.params?.id) query._id = Crypto.ObjectId(req.params.id);
      const response = req?.params?.id ? await req.collections.policy.findOne(query) : await req.collections.policy.find(query);
      return res.json(response);
    }catch(err){
      return res.error(req, env, 400, err?.message);
    }
  },
  Update: async (req, res, env)=>{
    try{
      const query = req.account?.rights ? { _id: Crypto.ObjectId(req.params.id) } : { _id: Crypto.ObjectId(req.params.id), owner: req.account._id };
      const target = await req.collections.policy.findOne(query);
      if(!target) throw new Error('Policy does not exist');
      const ability = Ability();
      req.content.rules.forEach(({ action, subject }) => (req.account.isRoot || req.account?.rights || req.account.policy.can(action, subject)) && ability.can(action, subject));
      let policy = Policy({ ...target, rules: ability.rules, updatedAt: Date.now() });
      await policy.validate();
            policy = policy.toObject();
      await req.collections.policy.updateOne({ _id: target._id }, { $set: policy });
      return res.json(policy);
    }catch(err){
      return res.error(req, env, 400, err?.message);
    }
  },
  Delete: async (req, res, env)=>{
    try{
      let query = req.account?.rights ? { _id: Crypto.ObjectId(req.params.id) } : { owner: req.account._id, _id: Crypto.ObjectId(req.params.id) };
      const response = await req.collections.policy.findOne(query);
      if(!response) throw new Error('Policy does not exist');
      await req.collections.policy.deleteOne(query);
      return res.json({ status: true });
    }catch(err){
      return res.error(req, env, 400, err?.message);
    }
  }
}
