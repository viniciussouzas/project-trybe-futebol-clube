import ITeams from './ITeams';

export default interface ITeamsModel {
  findAll(): Promise<ITeams[]>,
}
