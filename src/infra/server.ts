import 'reflect-metadata'

import {createConnection} from 'typeorm'

import app from '../app'
import http from 'http'

createConnection().catch((error) => onError(error))

const port = process.env.PORT;
app.set("port", port);

const server = http.createServer(app)

server.listen(port)

server.on("error", onError)
server.on("listening", onListening)

function onError(error: any) {
  if (error.syscall !== "listen") throw error

  switch(error.code) {
    case "EACCESS":
      console.log(`Port ${port} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.log(`Port ${port} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  console.log(`Listening on ${server.address()}`)
}