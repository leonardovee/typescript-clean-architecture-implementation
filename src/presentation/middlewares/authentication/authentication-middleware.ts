import { LoadAccountByToken } from '../../../domain/usecases/authentication/load-account-by-token'
import { forbidden, ok, serverError } from '../../helpers/http/http-helper'
import { Middleware, HttpRequest, HttpResponse } from '../../protocols'
import { AccessDeniedError } from '../../errors'

export class AuthenticationMiddleware implements Middleware {
  constructor (
    private readonly loadAccountByToken: LoadAccountByToken
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const accessToken = httpRequest.headers?.['x-access-token']
      if (accessToken) {
        const account = await this.loadAccountByToken.load(accessToken)
        if (account) return ok({ accountId: account.id })
      }
      return forbidden(new AccessDeniedError())
    } catch (error) {
      return serverError(error)
    }
  }
}
