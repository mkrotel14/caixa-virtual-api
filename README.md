<h1 align="center">Caixa Virtual API</h1>
A NodeJS API built with TypeScript and SOLID pattern

## Install dependencies
```
## Yarn
yarn install

## NPM
npm install
```

## Environment file
Before you create the Microservice, you need to configure you `.env.example` file and change to `.env`. `DB_HOST` must be set to the same name as the Database Docker service. i.e. `db`

## Running the microservice
1. Build you node application with `yarn build`.

2. After you configure the `.env` and build you API, you can run `docker-compose up -d --no-recreate` command.
This will create two docker instances, one for the NodeJS API and the other for the PostgreSQL database.

## Running tests
In your local environmet run:
`yarn test`
