import { makeLogControllerDecorator } from '../../usecases/decorators/log-controller-decorator-factory'
import { SignUpController } from '../../../../presentation/controllers/authentication/signup/signup-controller'
import { makeDbAuthentication } from '../../usecases/authentication/db-authentication-factory'
import { makeDbAddAccount } from '../../usecases/add-account/db-add-account-factory'
import { makeSignUpValidation } from './signup-validation-factory'
import { Controller } from '../../../../presentation/protocols'

export const makeSignUpController = (): Controller => {
  const controller = new SignUpController(makeDbAddAccount(), makeSignUpValidation(), makeDbAuthentication())
  return makeLogControllerDecorator(controller)
}
