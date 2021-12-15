namespace CreateBookError {
  export class InvalidNameError extends Error {
    constructor() {
      super(`Name is invalid`);
    }
  }

  export class InvalidDescriptionError extends Error {
    constructor() {
      super(`Description is invalid`);
    }
  }

  export class InvalidAuthorError extends Error {
    constructor() {
      super(`Author is invalid`);
    }
  }

  export class InvalidISBNError extends Error {
    constructor() {
      super(`ISBN is invalid`);
    }
  }

  export class AlreadyExistsNameError extends Error {
    constructor() {
      super(`This book name is already in use.`);
    }
  }
}

export { CreateBookError };
