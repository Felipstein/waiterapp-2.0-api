import { CreateUserDTO, UpdateUserDTO, UserEntity } from '../../entities/user.entity';

export interface UsersRepository {

  findAll(): Promise<UserEntity[]>;

  findById(id: string): Promise<UserEntity | null>;

  findByEmail(email: string): Promise<UserEntity | null>;

  create(data: CreateUserDTO): Promise<UserEntity>;

  update(id: string, data: UpdateUserDTO): Promise<UserEntity | null>;

  delete(id: string): Promise<void>;

}
