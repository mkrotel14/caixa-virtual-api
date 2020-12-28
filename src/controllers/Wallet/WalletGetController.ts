import {Request, Response} from 'express';
import {container} from 'tsyringe';

import WalletGetService from 'src/services/Wallet/WalletGetService'

export default class WalletGetController {
  public async get(req: Request, res: Response): Promise<Response> {
    try {
      const walletService = container.resolve(WalletGetService)
      return res.send(await walletService.get(req.params.id));
    } catch (error) {
      return res.json(error);
    }
  }
}