import { Router } from 'firecloud-router';
import RequiredMiddleware from 'firecloud-router/middlewares/Required.middleware';
import BearerMiddleware from 'firecloud-router/middlewares/Bearer.middleware';
import PolicyMiddleware from 'firecloud-router/middlewares/Policy.middleware';
import Controller from '../controllers/Account.controller';
import Auth from '../controllers/Auth.controller';
const account_fields = [
  {
    label: 'username',
    type: 'string',
    required: true,
    rule: (val) => val && val?.length >= 4,
    error: "Username must be at least 4 characters long"
  },
  {
    label: 'password',
    type: 'string',
    required: true,
    rule: (val) => val && val?.length >= 6,
    error: "Password must be at least 6 characters long"
  }
];

const app = Router({ base: "/v1/api" });
      app.post('/account/local', RequiredMiddleware(account_fields), Auth.Local);
      app.post('/account/token', BearerMiddleware, Auth.Access);
      app.post('/account/token/refresh', Auth.Refresh);
      app.post('/account', RequiredMiddleware(account_fields), Controller.Create);
      app.patch('/account', RequiredMiddleware(account_fields.map(e=>({ ...e, required: false }))), BearerMiddleware, Controller.Update);
      app.delete('/account', BearerMiddleware, Controller.Delete);

      app.get('/accounts', BearerMiddleware, PolicyMiddleware(['account']), Controller.Read);
      app.get('/accounts/:id', BearerMiddleware, PolicyMiddleware(['account']), Controller.Read);
      app.patch('/accounts/:id', RequiredMiddleware(account_fields.map(e=>({ ...e, required: false }))), BearerMiddleware, PolicyMiddleware(['account']), Controller.Update);
      app.delete('/accounts/:id', BearerMiddleware, PolicyMiddleware(['account']), Controller.Delete);

export default app.handle;
