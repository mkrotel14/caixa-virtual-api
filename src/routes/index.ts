import {Router} from 'express';

import client from './client';
import wallet from './wallet';
import transactions from './transactions';

const routes = Router();

routes.use('/client', client)
routes.use('/wallet', wallet);
routes.use('/transactions', transactions);

export default routes;