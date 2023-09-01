import { Router } from 'express';
import MatchesController from '../controllers/matches.controller';

const matchesController = new MatchesController();

const matchesRouter = Router();

matchesRouter.get('/', (req, res) => matchesController.findAllMatches(req, res));

export default matchesRouter;
