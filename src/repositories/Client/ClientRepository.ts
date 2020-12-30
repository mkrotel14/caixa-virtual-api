import {Repository, getRepository} from 'typeorm';

import Client from '../../entities/Client';
import IClientRepository from './IClientRepository';
import IClientDTO from './IClientDTO';
import Util from '../../util';
import Wallet from '../../entities/Wallet';

export default class ClientRepository implements IClientRepository {
  private _clientRepository: Repository<Client>
  private _walletRepository: Repository<Wallet>
  private _util: Util

  constructor() {
    this._clientRepository = getRepository(Client)
    this._walletRepository = getRepository(Wallet)
    this._util = new Util()
  }

  // Create a new Client and it's Wallet
  public async add(client: IClientDTO): Promise<Client> {
    client.password = this._util.hashPassword(client.password)    
    return await this._clientRepository.save(client)
  }


  // Authenticate Client and generate Access Token
  public async auth({taxId, password}: IClientDTO): Promise<string> {
    const client = await this._clientRepository.findOneOrFail({where: {taxId}})
    
    if (this._util.validatePassword(password, client?.password)) return this._util.createToken(client._id)
    else throw new Error('unauthorized')
  }

}