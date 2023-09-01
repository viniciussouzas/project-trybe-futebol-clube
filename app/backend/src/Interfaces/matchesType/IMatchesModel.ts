import IMatches from './IMatches';

export default interface IMatchesModel {
  findAll(inProgress?: string): Promise<IMatches[]>,
  findById(id: number): Promise<IMatches | null>,
  endMatch(id: number): Promise<boolean | void>,
  update(id: number, body: Partial<IMatches>): Promise<boolean | void>,
}
