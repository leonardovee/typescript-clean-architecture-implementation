import { CompareFieldValidation } from './compare-fields-validation'
import { InvalidParamError } from '../../presentation/errors'

interface SutTypes {
  sut: CompareFieldValidation
}

const makeSut = (): SutTypes => {
  const sut = new CompareFieldValidation('field', 'fieldToCompare')
  return {
    sut
  }
}

describe('RequiredField Validation', () => {
  test('Should return a InvalidParamError if validation fails', () => {
    const { sut } = makeSut()
    const error = sut.validate({
      field: 'any_value',
      fieldToCompare: 'incorrect_value'
    })
    expect(error).toEqual(new InvalidParamError('fieldToCompare'))
  })

  test('Should return void if validation succeds', () => {
    const { sut } = makeSut()
    const error = sut.validate({
      field: 'any_value',
      fieldToCompare: 'any_value'
    })
    expect(error).toBeFalsy()
  })
})
