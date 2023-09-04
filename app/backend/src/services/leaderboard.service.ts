import TeamsModel from '../models/teams.model';
import ITeamsModel from '../Interfaces/teamsType/ITeamsModel';
import MatchesModel from '../models/matches.model';
import IMatchesModel from '../Interfaces/matchesType/IMatchesModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import ILeaderboard from '../Interfaces/leaderboardType/ILeaderboard';
import { formatAwayTeam, formatHomeTeam, sortTeams } from '../utils/leaderboard';

export default class LeaderboardService {
  constructor(
    private teamsModel: ITeamsModel = new TeamsModel(),
    private matchesModel: IMatchesModel = new MatchesModel(),
  ) {}

  public async findAll(type: 'home' | 'away'): Promise<ServiceResponse<ILeaderboard[]>> {
    const teams = await this.teamsModel.findAll();

    const endedMatches = await this.matchesModel.findAll('false');

    const ldrboard = teams.map((team) => {
      const formatted = type === 'home'
        ? formatHomeTeam(team.id as number, team.teamName, endedMatches)
        : formatAwayTeam(team.id as number, team.teamName, endedMatches);

      return formatted;
    });

    const sorted = ldrboard.sort(sortTeams);

    return { status: 'SUCCESSFUL', data: sorted };
  }
}
