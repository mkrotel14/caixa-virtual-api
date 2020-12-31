import 'reflect-metadata'

import {Application} from 'express'
import app from '../app'
import http from 'http'

import "../container";

class Server {
  public server: http.Server
  private _app: Application
  private _port: string | undefined | number
  private _http: any

  constructor() {
    this._port = process.env.NODE_ENV == 'production' ?  process.env.PORT : 0
    this._app = app
    this._http = http
    this.exec()
  }

  // Create a new https server
  private exec(): void {
    this.server = this._http.createServer(this._app)    
    this.server.listen(this._port, () => {
      if(process.env.NODE_ENV == 'development')
      console.log(`Listening on port ${this._port}`)
    });

  }
}

export default new Server().server