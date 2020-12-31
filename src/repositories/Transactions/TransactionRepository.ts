import {Repository, getRepository} from 'typeorm';

import Transactions from '../../entities/Transactions';
import ITransactionsRepository from './ITransactionsRepository';
import ITransactionsDTO from './ITransactionsDTO';

import { ErrorHandler } from '../../helpers/error';

export default class TransactionsRepository implements ITransactionsRepository {
  private _transactionsRepository: Repository<Transactions>

  constructor() {
    this._transactionsRepository = getRepository(Transactions)
  }

  // Create a new Transaction
  public async add(transaction: ITransactionsDTO): Promise<Transactions[]> {
    try {
      return await this._transactionsRepository.save(transaction)
    } catch (error) {
      throw new ErrorHandler(error.message, 500)
    }
  }

}