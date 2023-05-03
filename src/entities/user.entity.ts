export type UserRole = 'WAITER' | 'ADMIN';

export interface UserEntity {
  id: string,
  name: string,
  email: string,
  password: string,
  role: UserRole,
}

export interface CreateUserDTO {
  name: string,
  email: string,
  password: string,
  role?: UserRole,
}

export interface UpdateUserDTO {
  name?: string,
  password?: string,
  role?: UserRole,
}
