import { Router } from 'express';

import { routes as v1Routes } from './v1';

const routes = Router();

routes.use('/v1', v1Routes);

routes.get('/', (req, res) => res.json({ message: 'Hello! API Working' }));

export { routes };
