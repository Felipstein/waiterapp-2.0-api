import { PrismaClient } from '@prisma/client';
import { InternalServerError } from '../errors/internal-server.error';

const prisma = new PrismaClient();

async function connectDatabase() {
  try {
    await prisma.$connect();

    console.info('✅ Successfully connected to PostgreSQL database.');
  } catch (err: Error | any) {
    throw new InternalServerError(err, 500);
  }
}

export { prisma, connectDatabase };
