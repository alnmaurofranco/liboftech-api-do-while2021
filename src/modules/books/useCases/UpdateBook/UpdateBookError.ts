namespace UpdateBookError {
  export class BookNotFound extends Error {
    constructor() {
      super("Book does not exists");
    }
  }

  export class NameBookAlreadyExists extends Error {
    constructor() {
      super("Book name already exists");
    }
  }
}

export { UpdateBookError };
