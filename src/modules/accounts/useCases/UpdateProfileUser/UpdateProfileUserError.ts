namespace UpdateProfileUserError {
  export class UserNotFound extends Error {
    constructor() {
      super("User does not exists");
    }
  }

  export class InvalidFirstNameError extends Error {
    constructor() {
      super(`First name is invalid`);
    }
  }

  export class InvalidLastNameError extends Error {
    constructor() {
      super(`Last name is invalid`);
    }
  }

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

export { UpdateProfileUserError };
