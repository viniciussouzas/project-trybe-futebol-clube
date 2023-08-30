import Team from '../database/models/TeamModel';
import ITeams from '../Interfaces/teamsType/ITeams';
import ITeamsModel from '../Interfaces/teamsType/ITeamsModel';

export default class TeamsModel implements ITeamsModel {
  private model = Team;

  async findAll(): Promise<ITeams[]> {
    const database = await this.model.findAll();

    return database.map(({ id, teamName }) => ({ id, teamName }));
  }
}
