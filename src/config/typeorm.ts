import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({ path: '.env' });
dotenvConfig({ path: '.env.local' });

const config: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT as unknown as number,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['**/*.entity.ts'],
  migrations: ['**/migrations/*.ts'],
  synchronize: true,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config);
