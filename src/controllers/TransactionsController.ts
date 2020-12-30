import {Request, Response} from 'express';
import {container} from 'tsyringe';

import TransactionsAddService from '../services/Transactions/TransactionsAddService'

export default class TransactionsController {
  public async save(req: Request, res: Response): Promise<Response> {
    try {
      const {_id} = res.locals
      req.body.walletId = _id;

      const transactionsService = container.resolve(TransactionsAddService)  
      return res.send( await transactionsService.add(req.body))
    } catch (error) {
      console.log(error)
      return res.status(400).send(error);
    }
  }
}