import { Crypto } from 'firecloud-router';

export default async (req, res, env) => {
   try{
     let ACCESS = await env.secrets.get('ACCESS');
     let REFRESH = await env.secrets.get('REFRESH');
     if(!REFRESH||!ACCESS){
        ACCESS = await Crypto.randomString(64);
        REFRESH = await Crypto.randomString(64);
        await env.secrets.put('ACCESS', ACCESS);
        await env.secrets.put('REFRESH', REFRESH);
     };
     env.SECRET = { ACCESS, REFRESH };
   }catch(err){
     return res.error(req, env, 501, 'KV Storage is unavailable');
   };
};
