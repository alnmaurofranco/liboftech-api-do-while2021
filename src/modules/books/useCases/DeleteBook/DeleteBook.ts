import { IBooksRepository } from "../../repositories/IBooksRepository";
import { DeleteBookError } from "./DeleteBookError";

type DeleteBookRequest = {
  book_id: string;
};

type DeleteBookResponse = void;

class DeleteBook {
  constructor(private readonly booksRepository: IBooksRepository) {}

  async execute({ book_id }: DeleteBookRequest): Promise<DeleteBookResponse> {
    const bookExists = await this.booksRepository.findById(book_id);

    if (!bookExists) {
      throw new DeleteBookError.BookNotFound();
    }

    await this.booksRepository.delete(bookExists);
  }
}

export { DeleteBook };
