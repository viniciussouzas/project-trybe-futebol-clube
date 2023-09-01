import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class MatchesController {
  constructor(
    private matchesService = new MatchesService(),
  ) {}

  public async findAllMatches(req: Request, res: Response): Promise<Response> {
    const { inProgress } = req.query;

    const { status, data } = await this.matchesService.findAll(inProgress as string | undefined);

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
