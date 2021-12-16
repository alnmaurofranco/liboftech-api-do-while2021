import { Book } from "../../domain/Book";
import { IBooksRepository } from "../../repositories/IBooksRepository";

type ListTop5BookResponse = Book[];

class ListTop5Book {
  constructor(private readonly booksRepository: IBooksRepository) {}

  async execute(): Promise<ListTop5BookResponse> {
    const booksWithManyViews =
      await this.booksRepository.findBooksWithManyViews();

    return booksWithManyViews;
  }
}

export { ListTop5Book };
