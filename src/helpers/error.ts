import {Response} from 'express'
import {isCelebrateError} from 'celebrate'

export class ErrorHandler extends Error {
  public message: string;
  public statusCode: number;
  
  constructor(message: string, statusCode: number) {
    super()
    this.statusCode = statusCode;
    this.message = message
  }
}

export async function handleError(error: any, res: Response) {
  const { statusCode, message } = error;

  if (isCelebrateError(error)) {
    return res.status(400).send({
      status: 'Request Validation Error',
      statusCode,
      message: error.details.get('body')?.message
    });
  } else {
    res.status(statusCode).json({
      status: "Application Error",
      message
    })
  }
  
}