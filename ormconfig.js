module.exports = {
  name: 'default',
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  logging: false,
  entities: ['./build/entities/*.js'],
  migrations: ['./build/migrations/*.js'],
  subscribers: ['./build/subscriber/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
