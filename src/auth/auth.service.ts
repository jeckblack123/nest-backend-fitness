import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { UsersService } from 'src/users/users.service';
import { IsEmail, IsString, Length } from 'class-validator';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import {
  HttpException,
  UnauthorizedException,
} from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/users/users.model';
import { LoginUserDto } from 'src/users/dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signup(userDto: CreateUserDto) {
    const candidate = await this.usersService.findUserByLogin(userDto.login);
    if (candidate) {
      throw new HttpException('Пользовтель сущетсвует', HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.usersService.createUser({
      ...userDto,
      password: hashPassword,
    });
    return this.generateToken(user);
  }

  async login(userDto: LoginUserDto) {
    const user = await this.validateUser(userDto);
    return await this.generateToken(user);
  }

  async validateUser(userDto: LoginUserDto) {
    const user = await this.usersService.findUserByLogin(userDto.login);
    const isPasswordValid = await bcrypt.compare(
      userDto.password,
      user.password,
    );
    if (user && isPasswordValid) {
      return user;
    }
    throw new UnauthorizedException({ message: 'Invalid Data' });
  }

  async generateToken(user: User) {
    const payload = { login: user.login, username: user.username };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
