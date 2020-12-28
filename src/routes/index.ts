import {Router} from 'express';

import wallet from './wallet';
import transactions from './transactions';

const routes = Router();

routes.use('/wallet', wallet);
routes.use('/transactions', transactions);

export default routes;