import {NextFunction, Request, Response} from 'express';
import {container} from 'tsyringe';

import ClientAddService from '../services/Client/ClientAddService'

export default class ClientController {
  public async save(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const clientService = container.resolve(ClientAddService)
      return res.send(await clientService.add(req.body))
    } catch (error) {
      next(error)
    }
  }
}