<h1 align="center">Caixa Virtual API</h1>

<p align="center">
  <a href="About">About</a> &#xa0; | &#xa0; 
  <a href="Features">Features</a> &#xa0; | &#xa0;
  <a href="Technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="Requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="Starting">Starting</a> &#xa0; | &#xa0;
  <a href="Docs">API Docs</a> &#xa0; | &#xa0;
  <a href="Environment">Environment File</a> 
</p>

<br>

## About ##

A NodeJS API to register Cash Flow built with TypeScript and SOLID pattern

## Features ##

:heavy_check_mark: Register Cash Flow (Income/Outcome);\
:heavy_check_mark: Register User;\
:heavy_check_mark: Financial Summary.

## Technologies ##

This project uses:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Requirements ##
Before you start the project you will need [Docker](https://www.docker.com/) installed in your machine.

## Starting ##
```bash

# Install dependencies
$ yarn install

# Build application
$ yarn build

# Test application
$ yarn test

```

## API Docs ##
To check the API documentaton and endpoints, see [Documentation](https://documenter.getpostman.com/view/8332628/TVt2bNzS)

<br>

# Creating Docker

## Environment File
Before you create the Microservice, you need to configure you `.env.example` file and change to `.env`. `DB_HOST` must be set to the same name as the Database Docker service. i.e. `db`

After you configure the `.env` and build you API, you can run `docker-compose up -d --no-recreate` command.
This will create two docker instances, one for the NodeJS API and the other for the PostgreSQL database and run the TypeORM Migrations.
