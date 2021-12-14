namespace GetProfileUserError {
  export class UserNotFound extends Error {
    constructor() {
      super("User does not exists");
    }
  }
}

export { GetProfileUserError };
