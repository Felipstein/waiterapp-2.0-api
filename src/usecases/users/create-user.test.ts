import { mock } from 'jest-mock-extended';
import { UsersRepository } from '../../repositories/users/users.repository';
import { CreateUserUseCase } from './create-user.usecase';
import { CreateUserDTO, UserEntity } from '../../entities/user.entity';

describe('Create User', () => {

  const userRepositoryMock = mock<UsersRepository>({
    create: jest.fn(),
  });

  const createUserUseCase = new CreateUserUseCase(userRepositoryMock);

  it('should create a user successsfully', async () => {

    const finalUserExpected: UserEntity = {
      id: 'fake-user-id',
      name: 'Fake User Name',
      email: 'fakeuseremail@example.com',
      password: 'hashed-password',
      role: 'WAITER',
    };

    userRepositoryMock.create.mockResolvedValueOnce(finalUserExpected);

    const createUserData: CreateUserDTO = {
      name: 'Fake User Name',
      email: 'fakeuseremail@example.com',
      password: 'password',
      role: 'WAITER',
    };

    const result = await createUserUseCase.execute(createUserData);

    expect(result).toEqual(finalUserExpected);
  });

});
