import { LoadAccountByTokenRepository } from '../../protocols/db/account/load-account-by-token-repository'
import { LoadAccountByToken } from '../../../domain/usecases/authentication/load-account-by-token'
import { Decrypter } from '../../protocols/cryptography/decrypter'
import { AccountModel } from '../../../domain/models/account'

export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor (
    private readonly decrypter: Decrypter,
    private readonly loadAccountByTokenRepository: LoadAccountByTokenRepository
  ) {}

  async load (accessToken: string, role?: string): Promise<AccountModel> {
    const token = await this.decrypter.decrypt(accessToken)
    if (token) await this.loadAccountByTokenRepository.loadByToken(accessToken, role)
    return null
  }
}
