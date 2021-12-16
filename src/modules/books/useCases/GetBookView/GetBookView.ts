import { Book } from "../../domain/Book";
import { IBooksRepository } from "../../repositories/IBooksRepository";
import { GetBookViewError } from "./GetBookViewError";

type GetBookViewRequest = {
  id: string;
};

type GetBookViewResponse = Book;

class GetBookView {
  constructor(private readonly booksRepository: IBooksRepository) {}

  async execute({ id }: GetBookViewRequest): Promise<GetBookViewResponse> {
    const bookExists = await this.booksRepository.findById(id);

    if (!bookExists) {
      throw new GetBookViewError.BookNotFound();
    }

    bookExists.view++;

    await this.booksRepository.save(bookExists);

    return bookExists;
  }
}

export { GetBookView };
