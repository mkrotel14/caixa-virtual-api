import {NextFunction, Request, Response} from 'express';
import {container} from 'tsyringe';

import TransactionsAddService from '../services/Transactions/TransactionsAddService'

export default class TransactionsController {
  public async save(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const {_id} = res.locals
      req.body.walletId = _id;

      const transactionsService = container.resolve(TransactionsAddService)  
      return res.send( await transactionsService.add(req.body))
    } catch (error) {
      next(error)
    }
  }
}