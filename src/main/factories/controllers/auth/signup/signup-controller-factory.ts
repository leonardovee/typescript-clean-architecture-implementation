import { makeLogControllerDecorator } from '../../../decorators/log-controller-decorator-factory'
import { SignUpController } from '../../../../../presentation/controllers/authentication/signup/signup-controller'
import { makeDbAuthentication } from '../../../usecases/account/authentication/db-authentication-factory'
import { makeDbAddAccount } from '../../../usecases/account/add-account/db-add-account-factory'
import { makeSignUpValidation } from './signup-validation-factory'
import { Controller } from '../../../../../presentation/protocols'

export const makeSignUpController = (): Controller => {
  const controller = new SignUpController(makeDbAddAccount(), makeSignUpValidation(), makeDbAuthentication())
  return makeLogControllerDecorator(controller)
}
