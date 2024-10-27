import { DataSource, DataSourceOptions } from 'typeorm';
import config from '../config/configure';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: config.database_host,
  port: config.database_port,
  username: config.database_username,
  password: config.database_password,
  database: config.database_name,
  entities: [`${__dirname}/../models/entities/*.{ts,js}`],
  migrations: [`${__dirname}/../models/migrations/*.{ts,js}`],
  migrationsTableName: 'migrations',
  extra: {
    ssl: config.database_ssl,
  },
  synchronize: false,
  logging: config.database_logging,
};

const dataSource = new DataSource(dataSourceOptions);