import Team from '../database/models/TeamModel';
import Match from '../database/models/MatchModel';
import IMatches from '../Interfaces/matchesType/IMatches';
import IMatchesModel from '../Interfaces/matchesType/IMatchesModel';

export default class MatchesModel implements IMatchesModel {
  private model = Match;

  async findAll(): Promise<IMatches[]> {
    const database = await this.model.findAll({
      include: [
        { model: Team, as: 'homeTeam', attributes: ['teamName'] },
        { model: Team, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    return database;
  }
}
