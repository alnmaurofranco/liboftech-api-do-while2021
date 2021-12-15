import { PrismaBooksRepository } from "../../../../modules/books/repositories/prisma/PrismaBooksRepository";
import { CreateBook } from "../../../../modules/books/useCases/CreateBook/CreateBook";
import { CreateBookController } from "../../../../modules/books/useCases/CreateBook/CreateBookController";

const CreateBookFactory = (): CreateBookController => {
  const booksRepository = new PrismaBooksRepository();

  const createBook = new CreateBook(booksRepository);

  return new CreateBookController(createBook);
};

export { CreateBookFactory };
