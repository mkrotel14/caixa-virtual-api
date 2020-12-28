import {Repository, getRepository} from 'typeorm';

import Transactions from 'src/entities/Transactions';
import ITransactionsRepository from './ITransactionsRepository';
import ITransactionsDTO from './ITransactionsDTO';

export default class TransactionsRepository implements ITransactionsRepository {
  private _transactionsRepository: Repository<Transactions>

  constructor() {
    this._transactionsRepository = getRepository(Transactions)
  }

  public async add(transaction: ITransactionsDTO): Promise<Transactions> {
    return await this._transactionsRepository.save(transaction)
  }
}