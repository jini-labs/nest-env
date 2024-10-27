import { config } from 'dotenv';
import * as process from 'process';

config();

export default {
  port: parseInt(process.env.LISTEN_PORT) || 3000,
  environment: parseInt(process.env.ENVIRONMENT) || 'development',

  // Database Config
  database_host: process.env.DATABASE_HOST || 'localhost',
  database_port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
  database_name: process.env.DATABASE_NAME,
  database_username: process.env.DATABASE_USERNAME,
  database_password: process.env.DATABASE_PASSWORD,
  database_logging: process.env.DATABASE_LOGGING
    ? process.env.DATABASE_LOGGING.trim().toLocaleLowerCase() == 'true'
    : false,
  database_acquire_timeout: process.env.DATABASE_ACQUIRE_TIMEOUT || 60000,
  database_ssl: process.env.DATABASE_SSL
    ? process.env.DATABASE_SSL.trim().toLocaleLowerCase() == 'true'
    : false,
  orm_sync: process.env.SYNCHRONIZE
    ? process.env.SYNCHRONIZE.trim().toLocaleLowerCase() == 'true'
    : false,
};