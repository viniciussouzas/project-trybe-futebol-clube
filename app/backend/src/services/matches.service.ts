import IMatches from '../Interfaces/matchesType/IMatches';
import IMatchesModel from '../Interfaces/matchesType/IMatchesModel';
import MatchesModel from '../models/matches.model';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class MatchesService {
  constructor(
    private matchesModel: IMatchesModel = new MatchesModel(),
  ) {}

  public async findAll(inProgress?: string | undefined): Promise<ServiceResponse<IMatches[]>> {
    const matches = await this.matchesModel.findAll(inProgress);

    return { status: 'SUCCESSFUL', data: matches };
  }

  public async update(id: number): Promise<ServiceResponse<{ message: string }>> {
    const match = await this.matchesModel.update(id);

    if (!match) {
      return { status: 'NOT_FOUND', data: { message: 'Match not found' } };
    }

    return { status: 'SUCCESSFUL', data: { message: 'Finished' } };
  }
}
