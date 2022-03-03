/**
 * generate error
 * @param {string} code error code
 * @param {string} message error message
 * @return {CustomError}
 */

interface Params {
  message: string;
  code: string;
}

export class CustomError extends Error {
  constructor(code: string, message: string) {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = code;
  }
}

function generateError({ message, code }: Params): CustomError {
  return new CustomError(code, message);
}

export default generateError;
