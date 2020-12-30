import {injectable, inject} from 'tsyringe'

import Client from '../../entities/Client';
import IClientDTO from '../../repositories/Client/IClientDTO';
import IClientRepository from '../../repositories/Client/IClientRepository';

@injectable()
export default class ClientAddService {
  constructor(
    @inject("ClientRepository")
    private _clientRepository: IClientRepository
  ) {}

  public async add(client: IClientDTO): Promise<Client> {
    return await this._clientRepository.add(client)
  }
}