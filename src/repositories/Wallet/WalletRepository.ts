import Wallet from '../../entities/Wallet';
import {Repository, getRepository, EntityRepository} from 'typeorm';
import IWalletRepository from './IWalletRepository';
import { injectable } from 'tsyringe';

@injectable()
@EntityRepository()
export default class WalletRepository implements IWalletRepository {
  private _walletRepository: Repository<Wallet>;

  constructor() {
    this._walletRepository = getRepository(Wallet);
  }

  // Get Client Wallet and it's transactions.
  public async get(_id: string): Promise<Wallet> {
    return await this._walletRepository.findOneOrFail({
      relations: ['transaction'],
      where: {_id}
    })
  }
}