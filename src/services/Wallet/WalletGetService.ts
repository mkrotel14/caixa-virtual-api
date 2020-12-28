import {injectable, inject} from 'tsyringe'
import Wallet from 'src/entities/Wallet';
import IWalletRepository from 'src/repositories/Wallet/IWalletRepository';

@injectable()
export default class WalletGetService {
  constructor(
    @inject("WalletRepository")
    private _walletRepository: IWalletRepository
  ) {}

  public async get(_id: string): Promise<Wallet | undefined> {
    return await this._walletRepository.get(_id)
  }
}