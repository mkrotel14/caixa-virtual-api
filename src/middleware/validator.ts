import {celebrate, Segments, Joi} from 'celebrate'

export const clientValidator = celebrate({
  [Segments.BODY]: {
    taxId: Joi.string().required(),
    password: Joi.string().required()
  }
})

export const transactionValitador = celebrate({
  [Segments.BODY]: {
    amount: Joi.number().required(),
    category: Joi.string().valid('Incoming', 'Outgoing').required(),
    description: Joi.string().required()
  }
})