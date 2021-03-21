import { AuthenticationMiddleware } from './authentication-middleware'
import { forbidden } from '../../helpers/http/http-helper'
import { HttpResponse } from '../../protocols/http'
import { AccessDeniedError } from '../../errors'

describe('Authentication Middleware', () => {
  test('Should return 403 if no x-access-token exists in headers', async () => {
    const sut: AuthenticationMiddleware = new AuthenticationMiddleware()
    const httpResponse: HttpResponse = await sut.handle({})
    expect(httpResponse).toEqual(forbidden(new AccessDeniedError()))
  })
})
