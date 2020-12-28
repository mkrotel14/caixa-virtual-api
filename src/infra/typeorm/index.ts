import {Connection, createConnection, getConnectionOptions} from 'typeorm'

export default class ConnectionPostgres {
  async create(connectionName: "default"): Promise<Connection> {
    const connectionOptions = await getConnectionOptions(connectionName);    
    const connection = await createConnection({
      ...connectionOptions,
      name: "default"
    })

    return connection;
  }
}