import {Request, Response} from 'express';
import {container} from 'tsyringe';

import ClientAddService from '../services/Client/ClientAddService'

export default class ClientController {
  public async save(req: Request, res: Response): Promise<Response> {
    try {
      const clientService = container.resolve(ClientAddService)
      return res.send(await clientService.add(req.body))
    } catch (error) {
      console.log(error)
      return res.status(400).send(error);
    }
  }
}