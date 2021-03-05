import { Controller } from '../../presentation/protocols'
import { LogControllerDecorator } from '../decorators/log'
import { makeSignUpValidation } from './signup-validation'
import { BcryptAdapter } from '../../infra/cryptography/bcrypt-adapter'
import { DbAddAccount } from '../../data/usecases/add-account/db-add-account'
import { LogMongoRepository } from '../../infra/db/mongodb/log-repository/log'
import { SignUpController } from '../../presentation/controllers/signup/signup'
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account'

export const makeSignUpController = (): Controller => {
  const accountMongoRepository = new AccountMongoRepository()
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const dbAddAccount = new DbAddAccount(bcryptAdapter, accountMongoRepository)
  const validationComposite = makeSignUpValidation()
  const signUpController = new SignUpController(dbAddAccount, validationComposite)
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(signUpController, logMongoRepository)
}
