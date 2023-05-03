import { CreateUserDTO, UserEntity } from '../../entities/user.entity';
import { APIError } from '../../errors/api.error';
import { UsersRepository } from '../../repositories/users/users.repository';

export class CreateUserUseCase {

  constructor(
    private usersRepository: UsersRepository,
  ) { }

  async execute({ name, email, password, role }: CreateUserDTO): Promise<UserEntity> {
    if(!name) {
      throw new APIError('Campo nome é obrigatório.', 400);
    }

    if(!email) {
      throw new APIError('Campo e-mail é obrigatório.', 400);
    }

    if(!password) {
      throw new APIError('Campo senha é obrigatório.', 400);
    }

    if(!role) {
      throw new APIError('Campo cargo é obrigatório.', 400);
    }

    const emailAlreadyExists = await this.usersRepository.findByEmail(email);
    if(emailAlreadyExists) {
      throw new APIError('E-mail já cadastrado.', 400);
    }

    const user = await this.usersRepository.create({ name, email, password, role });

    return user;
  }

}
