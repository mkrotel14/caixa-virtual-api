import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcryptjs'

export default class Util {
  public hashPassword(password: string): string {
    return bcrypt.hashSync(password, 8)
  }

  public validatePassword(unencriptedPassword: string, password: string): boolean {
    return bcrypt.compareSync(unencriptedPassword, password)
  }

  public createToken(data: any): string {
    return jwt.sign(data, `${process.env.JWT_TOKEN}`)
  }
}