import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UsersService } from './users/users.service';
import { User } from './users/users.model';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({ envFilePath: '.env' }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: "localhost",
      port: Number(process.env.PG_PORT),
      username: "postgres",
      password: 'i460601',
      database: "nestbackend",
      models: [User],
    }),
  ],
})
export class AppModule {}
