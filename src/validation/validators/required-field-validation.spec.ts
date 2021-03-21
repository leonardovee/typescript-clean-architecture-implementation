import { RequiredFieldValidation } from './required-field-validation'
import { MissingParamError } from '../../presentation/errors'

interface SutTypes {
  sut: RequiredFieldValidation
}

const makeSut = (): SutTypes => {
  const sut = new RequiredFieldValidation('any_field')
  return {
    sut
  }
}

describe('RequiredField Validation', () => {
  test('Should return a MissingParamError if validation fails', () => {
    const { sut } = makeSut()
    const error = sut.validate({})
    expect(error).toEqual(new MissingParamError('any_field'))
  })

  test('Should return void if validation succeds', () => {
    const { sut } = makeSut()
    const error = sut.validate({ any_field: true })
    expect(error).toBeFalsy()
  })
})
