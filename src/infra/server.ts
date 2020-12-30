import 'reflect-metadata'

import {Application} from 'express'
import app from '../app'
import http from 'http'

import "../container";

class Server {
  private _app: Application
  private _port: string | undefined
  private _http: any

  constructor() {
    this._port = process.env.PORT
    this._app = app
    this._http = http
    this.exec()
  }

  // Create a new https server
  private exec(): void {
    const server = this._http.createServer(this._app)    
    server.listen(this._port);

    server.on('listening', this.onListening)
    server.on('error', this.onError)
  }

  private onListening(): void {
    console.log(`Listening on port ${process.env.PORT}`)
  }

  private onError(error: any): void {
    if (error.syscall !== "listen") throw error

    switch(error.code) {
      case "EACCESS":
        console.log(`Port ${this._port} requires elevated privileges`);
        process.exit(1);
        break;
      case "EADDRINUSE":
        console.log(`Port ${this._port} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

}

export default new Server()