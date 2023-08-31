import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import ValidateLogin from '../middlewares/ValidateLogin';
import ValidateToken from '../middlewares/ValidateToken';

const usersController = new UsersController();

const usersRouter = Router();

usersRouter.post('/', ValidateLogin.login, (req, res) => usersController.findOneByEmail(req, res));
usersRouter.get(
  '/role',
  ValidateToken.token,
  (req, res) => usersController.findRoleByEmail(req, res),
);

export default usersRouter;
