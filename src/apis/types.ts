import { AxiosError } from 'axios';

export interface IApiSuccessMessage {
  status: string;
}

interface IApiError {
  status: string;
  statusCode: number;
  message: string;
}

export class ApiError implements IApiError {
  status = '';
  statusCode = 0;
  message = '';

  constructor(err: AxiosError) {
    if (err.response) {
      this.status = err.response.data.status;
      this.statusCode = err.response.status;
      this.message = err.response.data.errorMessage;
    }
  }
}
