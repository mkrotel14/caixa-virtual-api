import {Router} from 'express';
import ClientController from '../controllers/ClientController';
import AuthController from '../controllers/AuthController';

const router = Router();

const clientController = new ClientController();
const authController = new AuthController()

router.post('/', clientController.save);
router.post('/auth', authController.authenticate)

export default router;