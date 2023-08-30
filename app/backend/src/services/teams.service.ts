import ITeams from '../Interfaces/teamsType/ITeams';
import ITeamsModel from '../Interfaces/teamsType/ITeamsModel';
import TeamsModel from '../models/teams.model';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class TeamsService {
  constructor(
    private teamsModel: ITeamsModel = new TeamsModel(),
  ) {}

  public async findAll(): Promise<ServiceResponse<ITeams[]>> {
    const teams = await this.teamsModel.findAll();

    return { status: 'SUCCESSFUL', data: teams };
  }

  public async findById(id: number): Promise<ServiceResponse<ITeams | null>> {
    const team = await this.teamsModel.findById(id);

    return { status: 'SUCCESSFUL', data: team };
  }
}
