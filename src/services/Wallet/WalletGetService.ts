import {injectable} from 'tsyringe'

import Wallet from '../../entities/Wallet';
import WalletRepository from '../../repositories/Wallet/WalletRepository';

@injectable()
export default class WalletGetService {
  constructor(
    private _walletRepository: WalletRepository
  ) {}

  public async get(_id: string): Promise<Wallet | undefined> {
    return await this._walletRepository.get(_id)
  }
}