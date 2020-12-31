import {Router} from 'express';
import TransactionsController from '../controllers/TransactionsController'
import {validateToken} from '../middleware/validateToken'
import {transactionValitador} from '../middleware/validator'

const router = Router();

const transactionsController = new TransactionsController()

router.post('/', [validateToken, transactionValitador], transactionsController.save);

export default router;