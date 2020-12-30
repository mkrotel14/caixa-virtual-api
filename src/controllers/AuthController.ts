import { Request, Response } from "express";
import { container } from "tsyringe";

import AuthClientService from "../services/Auth/AuthClientService";

export default class AuthController {
  public async authenticate(req: Request, res: Response) {
    try {
      const authClient = container.resolve(AuthClientService);      
      res.send(await authClient.auth(req.body));      
    } catch (error) {
      console.log(error)
      return res.status(401).json(error)
    }
  }
}