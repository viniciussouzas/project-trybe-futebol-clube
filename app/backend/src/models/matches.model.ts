import Team from '../database/models/TeamModel';
import Match from '../database/models/MatchModel';
import IMatches from '../Interfaces/matchesType/IMatches';
import IMatchesModel from '../Interfaces/matchesType/IMatchesModel';

export default class MatchesModel implements IMatchesModel {
  private model = Match;

  async findAll(inProgress?: string | undefined): Promise<IMatches[]> {
    const filter = inProgress === undefined ? {} : { inProgress: inProgress === 'true' };

    const database = await this.model.findAll({
      where: filter,
      include: [
        { model: Team, as: 'homeTeam', attributes: ['teamName'] },
        { model: Team, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    return database;
  }

  async findById(id: number): Promise<IMatches | null> {
    const database = await this.model.findByPk(id);

    return database;
  }

  async update(id: number): Promise<boolean | void> {
    const database = await this.findById(id);

    if (!database) return false;

    await this.model.update({ inProgress: false }, { where: { id } });
    return true;
  }
}
