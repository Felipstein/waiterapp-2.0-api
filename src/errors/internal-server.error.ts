import { APIError } from './api.error';

export class InternalServerError extends APIError {

  constructor(readonly originalError: Error, serverStatusCode = 500) {
    super(originalError.message, serverStatusCode);
  }

}
