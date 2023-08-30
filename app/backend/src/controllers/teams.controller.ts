import { Request, Response } from 'express';
import TeamsService from '../services/teams.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class TeamsController {
  constructor(
    private teamsService = new TeamsService(),
  ) {}

  public async findAllTeams(req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.teamsService.findAll();

    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async findTeamById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const { status, data } = await this.teamsService.findById(Number(id));

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
