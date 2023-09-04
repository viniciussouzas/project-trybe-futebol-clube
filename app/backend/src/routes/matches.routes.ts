import { Router } from 'express';
import MatchesController from '../controllers/matches.controller';
import ValidateToken from '../middlewares/ValidateToken';

const matchesController = new MatchesController();

const matchesRouter = Router();

matchesRouter.get('/', (req, res) => matchesController.findAllMatches(req, res));
matchesRouter.patch(
  '/:id/finish',
  ValidateToken.token,
  (req, res) => matchesController.endMatch(req, res),
);
matchesRouter.patch(
  '/:id',
  ValidateToken.token,
  (req, res) => matchesController.updateMatch(req, res),
);
matchesRouter.post('/', ValidateToken.token, (req, res) => matchesController.createMatch(req, res));

export default matchesRouter;
