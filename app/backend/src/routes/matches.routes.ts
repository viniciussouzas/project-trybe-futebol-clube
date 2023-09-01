import { Router } from 'express';
import MatchesController from '../controllers/matches.controller';
import ValidateToken from '../middlewares/ValidateToken';

const matchesController = new MatchesController();

const matchesRouter = Router();

matchesRouter.get('/', (req, res) => matchesController.findAllMatches(req, res));
matchesRouter.patch(
  '/:id/finish',
  ValidateToken.token,
  (req, res) => matchesController.updateMatch(req, res),
);

export default matchesRouter;
