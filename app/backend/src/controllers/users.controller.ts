import { Request, Response } from 'express';
import UsersService from '../services/users.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class UsersController {
  constructor(
    private usersService = new UsersService(),
  ) {}

  public async findOneByEmail(req: Request, res: Response): Promise<Response> {
    const { status, data } = await this.usersService.findOne(req.body);

    return res.status(mapStatusHTTP(status)).json(data);
  }

  public async findRoleByEmail(req: Request, res: Response): Promise<Response> {
    const { user } = req.body;
    const { status, data } = await this.usersService.findRole(user);

    return res.status(mapStatusHTTP(status)).json(data);
  }
}
