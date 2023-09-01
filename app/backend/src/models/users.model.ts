import User from '../database/models/UserModel';
import IUsers from '../Interfaces/usersType/IUsers';
import IUsersModel from '../Interfaces/usersType/IUsersModel';

export default class UsersModel implements IUsersModel {
  private model = User;

  async findOne(email: string): Promise<IUsers | null> {
    const database = await this.model.findOne({ where: { email } });

    return database;
  }
}
