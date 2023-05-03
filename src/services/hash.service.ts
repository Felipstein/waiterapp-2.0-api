import bcrypt from 'bcrypt';

import { UserEntity } from '../entities/user.entity';

export default class HashService {

  constructor(
    readonly saltRounds: number | string,
  ) { }

  async hash(string: string | Buffer): Promise<string> {
    const hashed = await bcrypt.hash(string, this.saltRounds);

    return hashed;
  }

  async compare(plainString: string | Buffer, hashed: string): Promise<boolean> {
    const match = await bcrypt.compare(plainString, hashed);

    return match;
  }

  async matchPassword(password: string, user: UserEntity): Promise<boolean> {
    return await this.compare(password, user.password);
  }

}

export const hashService = new HashService(8);
