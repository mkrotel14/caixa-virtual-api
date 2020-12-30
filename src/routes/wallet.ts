import {Router} from 'express';
import WalletController from '../controllers/WalletController'
import {validateToken} from '../middleware/validateToken'

const router = Router();

const walletController = new WalletController()

router.get('/', validateToken, walletController.get);

export default router;