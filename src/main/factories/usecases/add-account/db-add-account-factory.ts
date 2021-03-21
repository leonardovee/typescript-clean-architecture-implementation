import { AccountMongoRepository } from '../../../../infra/db/mongodb/account/account-mongo-repository'
import { BcryptAdapter } from '../../../../infra/cryptography/bcrypt-adapter/bcrypt-adapter'
import { DbAddAccount } from '../../../../data/usecases/add-account/db-add-account'
import { AddAccount } from '../../../../domain/usecases/add-account'

export const makeDbAddAccount = (): AddAccount => {
  const accountMongoRepository = new AccountMongoRepository()
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  return new DbAddAccount(bcryptAdapter, accountMongoRepository)
}
