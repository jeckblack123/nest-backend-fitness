import { Exclude } from 'class-transformer';
import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';

interface UserCreationAttrs {
  username: string;
  login: string;
  password: string;
  sex: number;
  height: number;
  weight: number;
  birthDate: Date;
  role: number;
}

@Table({ tableName: 'Users' })
export class User extends Model<User, UserCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  username: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  login: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @Column({ type: DataType.NUMBER, allowNull: true })
  sex: number;

  @Column({ type: DataType.NUMBER, allowNull: true })
  height: number;

  @Column({ type: DataType.NUMBER, allowNull: true })
  weight: number;

  @Column({ type: DataType.NUMBER, allowNull: true })
  birthDate: Date;

  @Column({ type: DataType.NUMBER, allowNull: true })
  role: number;
}
