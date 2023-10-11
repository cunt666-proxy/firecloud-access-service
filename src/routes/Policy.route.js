import { Router } from 'firecloud-router';
import RequiredMiddleware from 'firecloud-router/middlewares/Required.middleware';
import BearerMiddleware from 'firecloud-router/middlewares/Bearer.middleware';
import PolicyMiddleware from 'firecloud-router/middlewares/Policy.middleware';
import Controller from '../controllers/Policy.controller';
const policy_fields = [{
  required: true,
  label: 'rules',
  type: 'array',
  rule: (val) => val && val.length && !val.find(e=> !e.action || !e.subject),
  error: 'Rules is required option'
}];

const app = Router({ base: "/v1/api" });
      app.post('/policy', RequiredMiddleware(policy_fields), BearerMiddleware, Controller.Create);
      app.get('/policy', BearerMiddleware, Controller.Read);
      app.get('/policy/:id', BearerMiddleware, Controller.Read);
      app.patch('/policy/:id', RequiredMiddleware(policy_fields), BearerMiddleware, Controller.Update);
      app.delete('/policy/:id', BearerMiddleware, Controller.Delete);

      app.post('/policies', RequiredMiddleware(policy_fields), BearerMiddleware, PolicyMiddleware(['policy']), Controller.Create);
      app.get('/policies', BearerMiddleware, PolicyMiddleware(['policy']), Controller.Read);
      app.get('/policies/:id', BearerMiddleware, PolicyMiddleware(['policy']), Controller.Read);
      app.patch('/policies/:id', RequiredMiddleware(policy_fields), BearerMiddleware, PolicyMiddleware(['policy']), Controller.Update);
      app.delete('/policies/:id', BearerMiddleware, PolicyMiddleware(['policy']), Controller.Delete);

export default app.handle;
