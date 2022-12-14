import InvalidParamError from '../errors/invalid-param-error'
import MissingParamError from '../errors/missing-param-error'
import { badRequest, ok } from '../helpers/http-helper'
import Controller from '../protocols/controller'
import EmailValidator from '../protocols/email-validator'
import { HttpRequest, HttpResponse } from '../protocols/http'
class Tmp {
  a: string
  b: string
}
export default class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator
  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse<any> {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) return badRequest(new MissingParamError(field))
    }
    if (!this.emailValidator.isValid(httpRequest.body.email)) return badRequest(new InvalidParamError('email'))
    const tmp = new Tmp()
    tmp.a = 'abc'
    tmp.b = 'abc'
    return ok<Tmp>(tmp)
  }
}
