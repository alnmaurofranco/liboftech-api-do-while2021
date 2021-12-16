import { Book } from "../../domain/Book";
import { IBooksRepository } from "../../repositories/IBooksRepository";
import { GetBookViewError } from "./GetBookViewError";

type GetBookViewRequest = {
  book_id: string;
};

type GetBookViewResponse = Book;

class GetBookView {
  constructor(private readonly booksRepository: IBooksRepository) {}

  async execute({ book_id }: GetBookViewRequest): Promise<GetBookViewResponse> {
    const bookExists = await this.booksRepository.findById(book_id);

    if (!bookExists) {
      throw new GetBookViewError.BookNotFound();
    }

    bookExists.view++;

    await this.booksRepository.save(bookExists);

    return bookExists;
  }
}

export { GetBookView };
