import User from '../database/models/UserModel';
import IUsers from '../Interfaces/usersType/IUsers';
import IUsersModel from '../Interfaces/usersType/IUsersModel';

export default class UsersModel implements IUsersModel {
  private model = User;

  async findOne(email: string): Promise<IUsers | null> {
    const user = await this.model.findOne({ where: { email } });

    if (!user) return null;

    return user;
  }
}
