import { CreateUserDTO, UserEntity } from '../../entities/user.entity';
import { APIError } from '../../errors/api.error';
import { BadRequestError } from '../../errors/bad-request.error';
import { UsersRepository } from '../../repositories/users/users.repository';

export class CreateUserUseCase {

  constructor(
    private usersRepository: UsersRepository,
  ) { }

  async execute({ name, email, password, role }: CreateUserDTO): Promise<UserEntity> {
    if(!name) {
      throw new BadRequestError('Campo nome é obrigatório.');
    }

    if(!email) {
      throw new BadRequestError('Campo e-mail é obrigatório.');
    }

    if(!password) {
      throw new BadRequestError('Campo senha é obrigatório.');
    }

    if(!role) {
      throw new BadRequestError('Campo cargo é obrigatório.');
    }

    const emailAlreadyExists = await this.usersRepository.findByEmail(email);
    if(emailAlreadyExists) {
      throw new BadRequestError('E-mail já cadastrado.');
    }

    const user = await this.usersRepository.create({ name, email, password, role });

    return user;
  }

}
