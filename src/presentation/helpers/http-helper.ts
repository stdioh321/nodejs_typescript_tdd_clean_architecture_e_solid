import { HttpResponse } from '../protocols/http'

export const badRequest = (error: Error): HttpResponse<Error> => ({
  statusCode: 400,
  body: error
})

export const ok = <T>(data: T): HttpResponse<T> => ({
  statusCode: 200,
  body: data
})
