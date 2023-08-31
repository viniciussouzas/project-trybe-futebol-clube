import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import ValidateLogin from '../middlewares/ValidateLogin';

const usersController = new UsersController();

const usersRouter = Router();

usersRouter.post('/', ValidateLogin.login, (req, res) => usersController.findOneByEmail(req, res));

export default usersRouter;
