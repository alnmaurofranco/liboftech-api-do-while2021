namespace ListAllBookError {
  export class EmptyBookListError extends Error {
    constructor() {
      super("Haven't books registered yet");
    }
  }
}

export { ListAllBookError };
