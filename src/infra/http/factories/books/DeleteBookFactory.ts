import { PrismaBooksRepository } from "../../../../modules/books/repositories/prisma/PrismaBooksRepository";
import { DeleteBook } from "../../../../modules/books/useCases/DeleteBook/DeleteBook";
import { DeleteBookController } from "../../../../modules/books/useCases/DeleteBook/DeleteBookController";

const DeleteBookFactory = (): DeleteBookController => {
  const booksRepository = new PrismaBooksRepository();

  const deleteBook = new DeleteBook(booksRepository);

  return new DeleteBookController(deleteBook);
};

export { DeleteBookFactory };
