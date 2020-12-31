import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { Connection } from 'typeorm';
import dotenv from 'dotenv'
// import {errors} from 'celebrate'

import {handleError} from './helpers/error'
import routes from './routes';
import Database from './infra/typeorm';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.connect('default');
  }

  // Setup new Database connection
  private async connect(connectionName: string): Promise<Connection> {
    const database = new Database();
    const connection = await database.getConnection(connectionName);
    return connection;
  }

  // Setup Express middlewares
  private config(): void {
    dotenv.config();
    
    this.app.use(helmet());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
    // this.app.use(errors());
    this.app.use(routes);

    // Express error handler
    this.app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
      handleError(err, res)
    });
  }
}

export default new App().app;