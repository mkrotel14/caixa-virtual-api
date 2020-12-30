import {injectable, inject} from 'tsyringe'

import Transactions from '../../entities/Transactions';
import ITransactionsDTO from '../../repositories/Transactions/ITransactionsDTO';
import ITransactionsRepository from '../../repositories/Transactions/ITransactionsRepository';

@injectable()
export default class TransactionsAddService {
  constructor(
    @inject("TransactionsRepository")
    private _transactionsRepository: ITransactionsRepository
  ) {}

  public async add(transaction: ITransactionsDTO): Promise<Transactions[]> {
    return await this._transactionsRepository.add(transaction)
  }
}