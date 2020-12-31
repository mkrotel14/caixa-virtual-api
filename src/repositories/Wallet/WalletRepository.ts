import {Repository, getRepository} from 'typeorm';

import Wallet from '../../entities/Wallet';
import IWalletRepository from './IWalletRepository';

import { ErrorHandler } from '../../helpers/error';

export default class WalletRepository implements IWalletRepository {
  private _walletRepository: Repository<Wallet>;

  constructor() {
    this._walletRepository = getRepository(Wallet);
  }

  // Get Client Wallet and it's transactions.
  public async get(_id: string): Promise<Wallet | undefined> {
    try {
      return await this._walletRepository.findOneOrFail({
        relations: ['transaction'],
        where: {_id}
      })
    } catch (error) {
      throw new ErrorHandler(error.message, 500)
    }
  }
}