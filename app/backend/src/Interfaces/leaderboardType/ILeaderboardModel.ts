import ILeaderboard from './ILeaderboard';

export default interface ILeaderboardModel {
  findAll(): Promise<ILeaderboard[]>,
}
