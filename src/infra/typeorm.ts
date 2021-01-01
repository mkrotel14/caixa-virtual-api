import {Connection, createConnection, ConnectionOptions, getConnectionOptions, ConnectionManager, getConnectionManager} from 'typeorm'

export default class Database {
  private connectionManager: ConnectionManager;

  constructor() {
    this.connectionManager = getConnectionManager()
  }

  public async getOptions(): Promise<ConnectionOptions> {
    let connectionOptions: ConnectionOptions
    
    connectionOptions = {
      type: 'postgres',
      synchronize: false,
      logging: false,
      entities: ['./build/entities/*.js'],
      migrations: ['./build/migrations/*.js'],
      subscribers: ['./build/subscriber/*.js'],
      cli: {
        migrationsDir: './src/migrations',
      },
    }

    if (process.env.DATABASE_URL) {
      Object.assign(connectionOptions, {url: process.env.DATABASE_URL})
    } else {
      const host = process.env.NODE_ENV == 'production' ? process.env.DB_HOST : 'localhost'
      
      Object.assign(connectionOptions, {
        host,
        port: 5432,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB,
      })
    }

    return connectionOptions
  }

  public async connection(): Promise<Connection> {
    const typeormConfig = await this.getOptions()
    
    let connection: Connection;    
    const hasConnection = this.connectionManager.has('default')
    
    if (hasConnection) {
      connection = this.connectionManager.get('default')
      if (!connection.isConnected) {
        return await createConnection(typeormConfig)
      }
    }
      connection =  await createConnection(typeormConfig)
      await connection.runMigrations({
        transaction: 'all'
      })

      return connection
  }

  public async close() {
    const connection = await this.connection();
    await connection.close();
  }

  public async clear() {
    const connection = await this.connection();
    const entities = connection.entityMetadatas;

    entities.map(async entity => {
      const repository = connection.getRepository(entity.name);
      await repository.query(`DELETE FROM ${entity.tableName}`);
    })
  }
}