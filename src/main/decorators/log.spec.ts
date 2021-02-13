import { LogControllerDecorator } from './log'
import { Controller } from '../../presentation/protocols'
import { HttpRequest, HttpResponse } from '../../presentation/protocols/http'

describe('LogController Decorator', () => {
  test('Should call controller handle', async () => {
    class ControllerStub implements Controller {
      async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        const httpResponse: HttpResponse = {
          statusCode: 200,
          body: {
            email: 'any_email@mail.com',
            name: 'any_name',
            password: 'any_password',
            confirmPasword: 'any_password'
          }
        }
        return new Promise(resolve => resolve(httpResponse))
      }
    }
    const controllerStub: ControllerStub = new ControllerStub()
    const handleSpy = jest.spyOn(controllerStub, 'handle')
    const sut: LogControllerDecorator = new LogControllerDecorator(controllerStub)
    const httpRequest: HttpRequest = {
      body: {
        email: 'any_email@mail.com',
        name: 'any_name',
        password: 'any_password',
        confirmPasword: 'any_password'
      }
    }
    await sut.handle(httpRequest)
    expect(handleSpy).toBeCalledWith(httpRequest)
  })
})
