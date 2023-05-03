import { User } from '@prisma/client';

export interface UsersRepository {

  findAll(): Promise<User[]>;

  findById(id: string): Promise<User | null>;

  findByEmail(email: string): Promise<User | null>;

  create(data: any): Promise<User>;

  update(id: string, data: any): Promise<User | null>;

  delete(id: string): Promise<void>;

}
