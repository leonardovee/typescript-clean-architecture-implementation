import { LogControllerDecorator } from './log'
import { Controller } from '../../presentation/protocols'
import { HttpRequest, HttpResponse } from '../../presentation/protocols/http'

const makeController = (): Controller => {
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
  return controllerStub
}

interface SutTypes {
  sut: LogControllerDecorator
  controllerStub: Controller
}

const makeSut = (): SutTypes => {
  const controllerStub: Controller = makeController()
  const sut: LogControllerDecorator = new LogControllerDecorator(controllerStub)
  return {
    sut,
    controllerStub
  }
}

describe('LogController Decorator', () => {
  test('Should call controller handle', async () => {
    const { sut, controllerStub } = makeSut()
    const handleSpy = jest.spyOn(controllerStub, 'handle')
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

  test('Should return the same result of the controller', async () => {
    const { sut } = makeSut()
    const httpRequest: HttpRequest = {
      body: {
        email: 'any_email@mail.com',
        name: 'any_name',
        password: 'any_password',
        confirmPasword: 'any_password'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual({
      statusCode: 200,
      body: {
        email: 'any_email@mail.com',
        name: 'any_name',
        password: 'any_password',
        confirmPasword: 'any_password'
      }
    })
  })
})
