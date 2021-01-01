<h1 align="center">Caixa Virtual API</h1>
A NodeJS API built with TypeScript and SOLID pattern

## Documentation
To check the API documentaton and endpoints, see [Documentation](https://documenter.getpostman.com/view/8332628/TVt2bNzS)

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
### Building
To build you NodeJS application run the command: `yarn build`.

### Creating Docker
After you configure the `.env` and build you API, you can run `docker-compose up -d --no-recreate` command.
This will create two docker instances, one for the NodeJS API and the other for the PostgreSQL database.

### Running migrations
To create the PostgreSQL database tables, run the command `yarn typeorm migration:run`.

## Running tests
In your local environmet run:
`yarn test`
