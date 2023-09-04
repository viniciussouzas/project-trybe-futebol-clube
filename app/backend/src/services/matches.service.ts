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

  public async endMatch(id: number): Promise<ServiceResponse<{ message: string }>> {
    const match = await this.matchesModel.endMatch(id);

    if (!match) {
      return { status: 'NOT_FOUND', data: { message: 'Match not found' } };
    }

    return { status: 'SUCCESSFUL', data: { message: 'Finished' } };
  }

  public async update(id: number, body: Partial<IMatches>) {
    const match = await this.matchesModel.update(id, body);

    if (!match) {
      return { status: 'NOT_FOUND', data: { message: 'Match not found' } };
    }

    const updtMatch = await this.matchesModel.findById(id);

    return { status: 'SUCCESSFUL', data: updtMatch };
  }

  public async create(body: Partial<IMatches>) {
    const { homeTeamId, awayTeamId } = body;

    if (homeTeamId === awayTeamId) {
      return {
        status: 'UNPROCESSABLE',
        data: { message: 'It is not possible to create a match with two equal teams' } };
    }

    const homeTeam = await this.matchesModel.findById(Number(homeTeamId));
    const awayTeam = await this.matchesModel.findById(Number(awayTeamId));

    if (!homeTeam || !awayTeam) {
      return { status: 'NOT_FOUND', data: { message: 'There is no team with such id!' } };
    }

    const match = await this.matchesModel.create(body);

    return { status: 'CREATED', data: match };
  }
}
