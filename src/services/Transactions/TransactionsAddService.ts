import {injectable, inject} from 'tsyringe'
import Transactions from 'src/entities/Transactions';
import ITransactionsDTO from 'src/repositories/Transactions/ITransactionsDTO';
import ITransactionsRepository from 'src/repositories/Transactions/ITransactionsRepository';

@injectable()
export default class TransactionsAddService {
  constructor(
    @inject("TransactionsRepository")
    private _transactionsRepository: ITransactionsRepository
  ) {}

  public async add(transaction: ITransactionsDTO): Promise<Transactions> {
    return await this._transactionsRepository.add(transaction)
  }
}