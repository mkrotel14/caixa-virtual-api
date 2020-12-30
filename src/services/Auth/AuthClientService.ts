import { inject, injectable } from "tsyringe";

import IClientDTO from "../../repositories/Client/IClientDTO";
import IClientRepository from "../../repositories/Client/IClientRepository";

@injectable()
export default class AuthClientService {
  constructor(
    @inject("ClientRepository")
    private _clientRepository: IClientRepository,
  ) {}

  public async auth(client: IClientDTO) {
    return await this._clientRepository.auth(client);
  }
}