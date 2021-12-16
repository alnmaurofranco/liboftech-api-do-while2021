namespace DeleteBookError {
  export class BookNotFound extends Error {
    constructor() {
      super("Book does not exists");
    }
  }
}

export { DeleteBookError };
