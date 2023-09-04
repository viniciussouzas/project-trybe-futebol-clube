import ILeaderboard from '../Interfaces/leaderboardType/ILeaderboard';
import IMatches from '../Interfaces/matchesType/IMatches';

const teamSchema = {
  name: '',
  totalPoints: 0,
  totalGames: 0,
  totalVictories: 0,
  totalDraws: 0,
  totalLosses: 0,
  goalsFavor: 0,
  goalsOwn: 0,
  goalsBalance: 0,
  efficiency: '',
};

const formatHomeTeam = (id: number, teamName: string, allMatches: IMatches[]) => {
  const teamMatches = allMatches.filter((match) => match.homeTeamId === id);

  const team = {
    ...teamSchema,
    name: teamName,
    totalGames: teamMatches.length,
    totalVictories: teamMatches.filter((match) => match.homeTeamGoals > match.awayTeamGoals).length,
    totalDraws: teamMatches.filter((match) => match.homeTeamGoals === match.awayTeamGoals).length,
    totalLosses: teamMatches.filter((match) => match.homeTeamGoals < match.awayTeamGoals).length,
    goalsFavor: teamMatches.reduce((acc, match) => acc + match.homeTeamGoals, 0),
    goalsOwn: teamMatches.reduce((acc, match) => acc + match.awayTeamGoals, 0),
  };

  team.totalPoints = team.totalVictories * 3 + team.totalDraws;
  team.goalsBalance = team.goalsFavor - team.goalsOwn;
  team.efficiency = `${((team.totalPoints / (team.totalGames * 3)) * 100).toFixed(2)}`;

  return team;
};

const formatAwayTeam = (id: number, teamName: string, allMatches: IMatches[]) => {
  const teamMatches = allMatches.filter((match) => match.awayTeamId === id);

  const team = {
    ...teamSchema,
    name: teamName,
    totalGames: teamMatches.length,
    totalVictories: teamMatches.filter((match) => match.homeTeamGoals > match.awayTeamGoals).length,
    totalDraws: teamMatches.filter((match) => match.homeTeamGoals === match.awayTeamGoals).length,
    totalLosses: teamMatches.filter((match) => match.homeTeamGoals < match.awayTeamGoals).length,
    goalsFavor: teamMatches.reduce((acc, match) => acc + match.homeTeamGoals, 0),
    goalsOwn: teamMatches.reduce((acc, match) => acc + match.awayTeamGoals, 0),
  };

  team.totalPoints = team.totalVictories * 3 + team.totalDraws;
  team.goalsBalance = team.goalsFavor - team.goalsOwn;
  team.efficiency = `${((team.totalPoints / (team.totalGames * 3)) * 100).toFixed(2)}`;

  return team;
};

const sortTeams = (a: ILeaderboard, b: ILeaderboard): number => {
  if (a.totalPoints !== b.totalPoints) {
    return b.totalPoints - a.totalPoints;
  }
  if (a.totalVictories !== b.totalVictories) {
    return b.totalVictories - a.totalVictories;
  }
  if (a.goalsBalance !== b.goalsBalance) {
    return b.goalsBalance - a.goalsBalance;
  }
  if (a.goalsFavor !== b.goalsFavor) {
    return b.goalsFavor - a.goalsFavor;
  }
  return 0;
};

export {
  formatHomeTeam,
  formatAwayTeam,
  sortTeams,
};
