import { EmailValidation, ValidationComposite, RequiredFieldValidation } from '../../../../../validation/validators'
import { EmailValidatorAdapter } from '../../../../../infra/validators/email-validator-adapter'
import { Validation } from '../../../../../presentation/protocols/validation'

export const makeLoginValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['email', 'password']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}
