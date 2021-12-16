import { PrismaBooksRepository } from "../../../../modules/books/repositories/prisma/PrismaBooksRepository";
import { ListTop5Book } from "../../../../modules/books/useCases/ListTop5Book/ListTop5Book";
import { ListTop5BookController } from "../../../../modules/books/useCases/ListTop5Book/ListTop5BookController";

const ListTop5BookFactory = (): ListTop5BookController => {
  const booksRepository = new PrismaBooksRepository();

  const listTop5Book = new ListTop5Book(booksRepository);

  return new ListTop5BookController(listTop5Book);
};

export { ListTop5BookFactory };
