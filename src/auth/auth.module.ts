import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { forwardRef } from '@nestjs/common/utils';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() => UsersModule),
    JwtModule.register({ secret: 'SECRET', signOptions: { expiresIn: '24h' } }),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
