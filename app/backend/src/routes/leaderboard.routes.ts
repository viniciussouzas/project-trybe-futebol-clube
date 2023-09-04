import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboard.controller';

const leaderboardController = new LeaderboardController();

const leaderboardRouter = Router();

leaderboardRouter.get('/home', (req, res) => leaderboardController.findAll(req, res, 'home'));
leaderboardRouter.get('/away', (req, res) => leaderboardController.findAll(req, res, 'away'));

export default leaderboardRouter;
