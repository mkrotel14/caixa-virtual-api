import {Repository, getRepository} from 'typeorm';

import Client from '../../entities/Client';
import IClientRepository from './IClientRepository';
import IClientDTO from './IClientDTO';

import Util from '../../util';
import { ErrorHandler } from '../../helpers/error';
export default class ClientRepository implements IClientRepository {
  private _clientRepository: Repository<Client>
  private _util: Util

  constructor() {
    this._clientRepository = getRepository(Client)
    this._util = new Util()
  }

  // Create a new Client. Check InsertEventSubscriber for the Client,
  // this adds a new Wallet with the same _id as the Client.
  public async add(client: IClientDTO): Promise<Client> {  
    try {
      client.password = this._util.hashPassword(client.password)    
      return await this._clientRepository.save(client)
    } catch (error) {
      throw new ErrorHandler(error.message, 409);
    }
  }

  // Authenticate Client and generate an AccessToken
  public async auth({taxId, password}: IClientDTO): Promise<string> {
    try {
      const client = await this._clientRepository.findOneOrFail({where: {taxId}})
      
      if (this._util.validatePassword(password, client?.password)) return this._util.createToken(client._id)
      else throw new ErrorHandler('Invalid client/password combination', 404);
    } catch (error) {
      throw new ErrorHandler(error.message, 404);
    }
  }

}