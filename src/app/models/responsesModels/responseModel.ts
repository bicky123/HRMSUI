export interface IResponseModel<T> {
  data: T,
  errorMessage: string,
  errors: Array<string>,
  message: string,
  statusCode: number,
  success: boolean
}