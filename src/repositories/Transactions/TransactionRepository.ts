import {Repository, getRepository} from 'typeorm';

import Transactions from '../../entities/Transactions';
import ITransactionsRepository from './ITransactionsRepository';
import ITransactionsDTO from './ITransactionsDTO';

export default class TransactionsRepository implements ITransactionsRepository {
  private _transactionsRepository: Repository<Transactions>

  constructor() {
    this._transactionsRepository = getRepository(Transactions)
  }

  // Create a new Transaction
  public async add(transaction: ITransactionsDTO): Promise<Transactions[]> {
    return await this._transactionsRepository.save(transaction)
  }

}