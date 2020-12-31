module.exports = {
  name: 'default',
  type: 'postgres',
  url: process.env.DATABASE_URL,
  logging: false,
  entities:
    process.env.NODE_ENV == 'production'
      ? ['./build/entities/*.js']
      : ['./src/entities/*.ts'],
  migrations:
    process.env.NODE_ENV == 'production'
      ? ['./build/migrations/*.js']
      : ['./src/migrations/*.ts'],
  subscribers:
    process.env.NODE_ENV == 'production'
      ? ['./build/subscriber/*.js']
      : ['./src/subscriber/*.ts'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
