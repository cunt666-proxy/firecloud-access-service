import { Crypto } from 'firecloud-router';
import response from 'firecloud-router/response';
import DatabaseMiddleware from 'firecloud-router/middlewares/Database.middleware';

export default async (event, env, ctx)=>{
     try{
       switch (event.cron) {
         case "0 0 * * *":
           let request = {};
           await DatabaseMiddleware(['token'])(request, null, env);
           await request.collections.token.deleteMany({ expiredAt: { $lt: Math.floor(Date.now() / 1000) } });
           const logs = await env.logs.list();
           for( key in logs ){
             const entry = await env.logs.get(key);
             if(entry && Date.now() - JSON.parse(entry.value).createdAt > 2592000000) await env.logs.delete(key);
           };
           console.log(`Purging Expired Data`);
           break;
         case "0 15 1 * *":
           await env.secrets.put('ACCESS', await Crypto.randomString(64));
           await env.secrets.put('REFRESH', await Crypto.randomString(64));
           console.log(`Monthly Rotation`);
           break;
       };
     }catch(err){
       return response.error(null, env, null, `CRON: ${err?.message}`);
     };
};
