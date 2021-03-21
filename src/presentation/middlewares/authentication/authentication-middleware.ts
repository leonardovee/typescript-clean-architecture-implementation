import { LoadAccountByToken } from '../../../domain/usecases/authentication/load-account-by-token'
import { Middleware, HttpRequest, HttpResponse } from '../../protocols'
import { forbidden } from '../../helpers/http/http-helper'
import { AccessDeniedError } from '../../errors'

export class AuthenticationMiddleware implements Middleware {
  constructor (
    private readonly loadAccountByToken: LoadAccountByToken
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const accessToken = httpRequest.headers?.['x-access-token']
    if (accessToken) {
      await this.loadAccountByToken.load(accessToken)
    }
    return forbidden(new AccessDeniedError())
  }
}
