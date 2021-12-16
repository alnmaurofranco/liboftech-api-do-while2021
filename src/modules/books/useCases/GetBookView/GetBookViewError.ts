namespace GetBookViewError {
  export class BookNotFound extends Error {
    constructor() {
      super("Book does not exists");
    }
  }
}

export { GetBookViewError };
