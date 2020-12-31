import {Router} from 'express';
import ClientController from '../controllers/ClientController';
import AuthController from '../controllers/AuthController';
import {clientValidator} from '../middleware/validator'

const router = Router();

const clientController = new ClientController();
const authController = new AuthController()

router.post('/', clientValidator, clientController.save);

router.post('/auth', clientValidator, authController.authenticate)

export default router;