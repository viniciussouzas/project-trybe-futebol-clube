import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboard.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class LeaderboardController {
  constructor(
    private leaderboardService = new LeaderboardService(),
  ) {}

  public async findAll(_req: Request, res: Response, type: 'home' | 'away'): Promise<Response> {
    const { status, data } = await this.leaderboardService.findAll(type);

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
