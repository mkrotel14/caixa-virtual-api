import {Request, Response, NextFunction} from 'express'
import * as jwt from 'jsonwebtoken'

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    let token = <string>req.headers['authorization']

    if (token.startsWith('Bearer ')) token = token.slice(7, token.length)
    console.log(process.env.JWT_TOKEN)
    res.locals._id = jwt.verify(token, `${process.env.JWT_TOKEN}`)
    
    next()
  } catch (error) {
    return res.status(401).send(error)    
  }
}