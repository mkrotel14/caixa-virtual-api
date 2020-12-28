import {Request, Response} from 'express';
import {container} from 'tsyringe';

import TransactionsSaveService from 'src/services/Transactions/TransactionsAddService'

export default class TransactionsSaveController {
  public async save(req: Request, res: Response): Promise<Response> {
    try {
      const transactionsService = container.resolve(TransactionsSaveService)  
      return res.send( await transactionsService.add(req.body))
    } catch (error) {
      return res.json(error)
    }
  }
}