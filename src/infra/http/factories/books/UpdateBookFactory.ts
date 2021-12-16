import { PrismaBooksRepository } from "../../../../modules/books/repositories/prisma/PrismaBooksRepository";
import { UpdateBook } from "../../../../modules/books/useCases/UpdateBook/UpdateBook";
import { UpdateBookController } from "../../../../modules/books/useCases/UpdateBook/UpdateBookController";

const UpdateBookFactory = (): UpdateBookController => {
  const booksRepository = new PrismaBooksRepository();

  const updateBook = new UpdateBook(booksRepository);

  return new UpdateBookController(updateBook);
};

export { UpdateBookFactory };
