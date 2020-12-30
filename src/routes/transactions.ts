import {Router} from 'express';
import TransactionsController from '../controllers/TransactionsController'
import {validateToken} from '../middleware/validateToken'

const router = Router();

const transactionsController = new TransactionsController()

router.post('/', validateToken, transactionsController.save);

export default router;