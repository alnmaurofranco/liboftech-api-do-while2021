import { PrismaBooksRepository } from "../../../../modules/books/repositories/prisma/PrismaBooksRepository";
import { ListAllBook } from "../../../../modules/books/useCases/ListAllBook/ListAllBook";
import { ListAllBookController } from "../../../../modules/books/useCases/ListAllBook/ListAllBookController";

const ListAllBookFactory = (): ListAllBookController => {
  const booksRepository = new PrismaBooksRepository();

  const listAllBooks = new ListAllBook(booksRepository);

  return new ListAllBookController(listAllBooks);
};

export { ListAllBookFactory };
