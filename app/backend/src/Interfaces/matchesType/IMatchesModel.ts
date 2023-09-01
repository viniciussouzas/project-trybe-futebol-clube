import IMatches from './IMatches';

export default interface IMatchesModel {
  findAll(inProgress?: string): Promise<IMatches[]>,
  findById(id: number): Promise<IMatches | null>,
  update(id: number): Promise<void | boolean>,
}
