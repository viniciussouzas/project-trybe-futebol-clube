import IMatches from './IMatches';

export default interface IMatchesModel {
  findAll(inProgress?: string): Promise<IMatches[]>,
}
