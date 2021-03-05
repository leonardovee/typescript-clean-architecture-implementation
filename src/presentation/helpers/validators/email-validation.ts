import { Validation } from './validation'
import { badRequest } from '../http-helper'
import { InvalidParamError } from '../../errors'
import { EmailValidator } from '../../protocols/email-validator'

export class EmailValidation implements Validation {
  private readonly emailValidator: EmailValidator
  private readonly fieldName: string

  constructor (fieldName: string, emailValidator: EmailValidator) {
    this.fieldName = fieldName
    this.emailValidator = emailValidator
  }

  validate (input: any): any {
    const isValid = this.emailValidator.isValid(input[this.fieldName])
    if (!isValid) {
      return badRequest(new InvalidParamError(this.fieldName))
    }
  }
}
