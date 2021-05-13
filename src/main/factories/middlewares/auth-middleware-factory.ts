import { AuthMiddleware } from '../../../presentation/middlewares/auth-middleware'
import { Middleware } from '../../../presentation/protocols'

export const makeAuthMiddleware = (): Middleware => {
  return new AuthMiddleware()
}
