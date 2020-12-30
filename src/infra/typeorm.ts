import {Connection, ConnectionManager, createConnection, getConnectionManager} from 'typeorm'

export default class Database {
  private connectionManager: ConnectionManager;

  constructor() {
    this.connectionManager = getConnectionManager()
  }

  public async getConnection(name: string): Promise<Connection> {
    const CONNECTION_NAME: string = name
    let connection: Connection

    const hasConnection = this.connectionManager.has(CONNECTION_NAME)
    
    if (hasConnection) {
      connection = this.connectionManager.get(CONNECTION_NAME)

      if (!connection.isConnected) connection.connect()
    } else {
      connection = await createConnection()
    }
    return connection;
  }
}