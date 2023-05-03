import { app } from './app';
import { prisma } from './database';
import { env } from './config/env.config';

const port = env.PORT || 3333;

async function main() {
  try {
    await prisma.$connect();
    console.info('✅ Successfully connected to PostgreSQL database.');

    app.listen(port, () => console.log(`🚀 WaiterAPP 2.0 API running at port ${port}.`));
  } catch (err) {
    console.error('❌ Error connecting to database:');
    console.error(err);
    console.error('❌ Error connecting to database.');
  }
}

main();
