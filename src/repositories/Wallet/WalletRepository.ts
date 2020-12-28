import Wallet from 'src/entities/Wallet';
import {Repository, getRepository} from 'typeorm';
import IWalletRepository from './IWalletRepository';

export default class WalletRepository implements IWalletRepository {
  private _walletRepository: Repository<Wallet>;

  constructor() {
    this._walletRepository = getRepository(Wallet);
  }

  public async get(_id: string): Promise<Wallet | undefined> {
    return await this._walletRepository.findOne({where: {_id}})
  }
}