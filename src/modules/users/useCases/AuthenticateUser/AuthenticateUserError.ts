namespace AuthenticateUserError {
  export class InvalidEmailOrPasswordError extends Error {
    constructor() {
      super("Email or password is invalid");
    }
  }
}

export { AuthenticateUserError };
