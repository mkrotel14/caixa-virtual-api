import {Request, Response} from 'express';
import {container} from 'tsyringe';

import WalletGetService from '../services/Wallet/WalletGetService'

export default class WalletController {
  public async get(req: Request, res: Response): Promise<Response> {
    try {
      const {_id} = res.locals
      
      const walletService = container.resolve(WalletGetService)
      return res.send(await walletService.get(_id));
    } catch (error) {
      console.log(error)
      return res.status(400).send(error);
    }
  }
}