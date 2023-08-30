import { Router } from 'express';
import TeamsController from '../controllers/teams.controller';

const teamsController = new TeamsController();

const teamsRouter = Router();

teamsRouter.get('/', (req, res) => teamsController.findAllTeams(req, res));

export default teamsRouter;
