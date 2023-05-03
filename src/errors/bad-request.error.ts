import { APIError } from './api.error';

export class BadRequestError extends APIError {

  constructor(message = 'Requisição incorreta.') {
    super(message, 400);
  }

}
