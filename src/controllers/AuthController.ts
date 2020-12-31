import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";

import AuthClientService from "../services/Auth/AuthClientService";

export default class AuthController {
  public async authenticate(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const authClient = container.resolve(AuthClientService);
      return res.send({token: await authClient.auth(req.body)});
    } catch (error) {
      next(error)
    }
  }
}