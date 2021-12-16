namespace UpdateBookError {
  export class BookNotFound extends Error {
    constructor() {
      super("Book does not exists");
    }
  }

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

  export class NameBookAlreadyExists extends Error {
    constructor() {
      super("Book name already exists");
    }
  }
}

export { UpdateBookError };
