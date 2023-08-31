import * as bcrypt from 'bcryptjs';
import JWT from '../utils/JWT';
import IUsers from '../Interfaces/usersType/IUsers';
import IUsersModel from '../Interfaces/usersType/IUsersModel';
import UsersModel from '../models/users.model';

export default class UsersService {
  constructor(
    private usersModel: IUsersModel = new UsersModel(),
  ) {}

  public async findOne(data: IUsers) {
    const user = await this.usersModel.findOne(data.email);

    if (!user) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    if (!bcrypt.compare(data.password, user.password)) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password ' } };
    }

    const token = JWT.sign({ email: user.email });

    return { status: 'SUCCESSFUL', data: { token } };
  }
}
