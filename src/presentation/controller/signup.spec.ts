import SignUpController from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', async () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpRespnse = sut.handle(httpRequest)
    expect(httpRespnse.statusCode).toBe(400)
    expect(httpRespnse.body).toEqual(new Error('Missing params: name'))
  })
  test('Should return 400 if no email is provided', async () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpRespnse = sut.handle(httpRequest)
    expect(httpRespnse.statusCode).toBe(400)
    expect(httpRespnse.body).toEqual(new Error('Missing params: email'))
  })
})
