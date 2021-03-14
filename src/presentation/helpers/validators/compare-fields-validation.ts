import { InvalidParamError } from '../../errors'
import { Validation } from '../../protocols/validation'

export class CompareFieldValidation implements Validation {
  constructor (
    private readonly fieldName: string,
    private readonly fieldToCompareName: string
  ) {
    this.fieldName = fieldName
    this.fieldToCompareName = fieldToCompareName
  }

  validate (input: any): any {
    if (input[this.fieldName] !== input[this.fieldToCompareName]) return new InvalidParamError(this.fieldToCompareName)
  }
}
