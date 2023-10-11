import { Router } from 'firecloud-router';
import DatabaseMiddleware from 'firecloud-router/middlewares/Database.middleware';
import SecretMiddleware from './middlewares/Secret.middleware';
import AccountRoute from './routes/Account.route';
import PolicyRoute from './routes/Policy.route';
import TokenRoute from './routes/Token.route';

const app = Router({ base: "/v1/api" });
      app.all('*', DatabaseMiddleware(['account', 'policy', 'token']), SecretMiddleware);
      app.all('*', AccountRoute);
      app.all('*', PolicyRoute);
      app.all('/token/*', TokenRoute);

export default app.handle;
