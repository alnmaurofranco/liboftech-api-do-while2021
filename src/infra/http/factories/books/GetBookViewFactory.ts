import { PrismaBooksRepository } from "../../../../modules/books/repositories/prisma/PrismaBooksRepository";
import { GetBookView } from "../../../../modules/books/useCases/GetBookView/GetBookView";
import { GetBookViewController } from "../../../../modules/books/useCases/GetBookView/GetBookViewController";

const GetBookViewFactory = (): GetBookViewController => {
  const booksRepository = new PrismaBooksRepository();

  const getBookView = new GetBookView(booksRepository);

  return new GetBookViewController(getBookView);
};

export { GetBookViewFactory };
