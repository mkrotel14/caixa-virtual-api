import {NextFunction, Request, Response} from 'express';
import {container} from 'tsyringe';

import WalletGetService from '../services/Wallet/WalletGetService'

export default class WalletController {
  public async get(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const {_id} = res.locals
      
      const walletService = container.resolve(WalletGetService)
      return res.send(await walletService.get(_id));
    } catch (error) {
      next(error)
    }
  }
}