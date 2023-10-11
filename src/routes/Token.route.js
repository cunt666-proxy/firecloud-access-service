import { Router } from 'firecloud-router';
import BearerMiddleware from 'firecloud-router/middlewares/Bearer.middleware';
import Controller from '../controllers/Token.controller';

const app = Router({ base: "/v1/api/token" });
      app.post('', BearerMiddleware, Controller.Create);
      app.get('', BearerMiddleware, Controller.Read);
      app.get('/:id', BearerMiddleware, Controller.Read);
      app.delete('/:id', BearerMiddleware, Controller.Delete);

export default app.handle;
