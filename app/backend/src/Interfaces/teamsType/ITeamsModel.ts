import ITeams from './ITeams';

export default interface ITeamsModel {
  findAll(): Promise<ITeams[]>,
  findById(id: number): Promise<ITeams | null>,
}
