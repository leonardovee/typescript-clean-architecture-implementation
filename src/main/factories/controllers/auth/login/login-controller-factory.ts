import { makeLogControllerDecorator } from '../../../decorators/log-controller-decorator-factory'
import { makeDbAuthentication } from '../../../usecases/account/authentication/db-authentication-factory'
import { LoginController } from '../../../../../presentation/controllers/authentication/login/login-controller'
import { makeLoginValidation } from './login-validation-factory'
import { Controller } from '../../../../../presentation/protocols'

export const makeLoginController = (): Controller => {
  const controller = new LoginController(makeDbAuthentication(), makeLoginValidation())
  return makeLogControllerDecorator(controller)
}
