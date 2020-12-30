import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { Connection } from 'typeorm';
import dotenv from 'dotenv'

import routes from './routes';
import Database from './infra/typeorm';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.connect('default')
  }

  private async connect(connectionName: string): Promise<Connection> {
    const database = new Database()
    const connection = await database.getConnection(connectionName)
    return connection
  }

  private config(): void {
    this.app.use(helmet())
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({extended: false}))
    this.app.use(routes);

    dotenv.config()
  }
}

export default new App().app;