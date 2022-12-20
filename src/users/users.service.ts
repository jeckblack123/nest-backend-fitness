import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    return user;
  }

  async findAll() {
    const users = await this.userRepository.findAll({
      attributes: { exclude: ['password'] },
    });
    return users;
  }

  async findUserByLogin(login: string) {
    const users = await this.userRepository.findOne({ where: { login } });
    return users;
  }
}
