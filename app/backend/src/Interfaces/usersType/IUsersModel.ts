import IUsers from './IUsers';

export default interface IUsersModel {
  findOne(email: IUsers['email']): Promise<IUsers | null>;
}
