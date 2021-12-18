import { Book } from "../../domain/Book";
import { IBooksRepository } from "../../repositories/IBooksRepository";
import { ListAllBookError } from "./ListAllBookError";

type ListAllBookResponse = Book[];

class ListAllBook {
  constructor(private readonly booksRepository: IBooksRepository) {}

  async execute(): Promise<ListAllBookResponse> {
    const booksExistent = await this.booksRepository.findAll();

    if (booksExistent.length <= 0) {
      throw new ListAllBookError.EmptyBookListError();
    }

    return booksExistent;
  }
}

export { ListAllBook };
