namespace RegisterUserError {
  export class InvalidEmailError extends Error {
    constructor() {
      super(`Email is invalid`);
    }
  }

  export class AlreadyExistsEmailError extends Error {
    constructor(email: string) {
      super(`Email ${email} is already in use`);
    }
  }
}

export { RegisterUserError };
