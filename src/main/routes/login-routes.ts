import { makeSignUpController } from '../factories/controllers/auth/signup/signup-controller-factory'
import { makeLoginController } from '../factories/controllers/auth/login/login-controller-factory'
import { adaptRoute } from '../adapters/express-route-adapter'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
  router.post('/login', adaptRoute(makeLoginController()))
}
