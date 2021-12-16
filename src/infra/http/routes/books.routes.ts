import { Router } from "express";
import { CreateBookFactory } from "../factories/books/CreateBookFactory";
import { GetBookViewFactory } from "../factories/books/GetBookViewFactory";
import { ListAllBookFactory } from "../factories/books/ListAllBookFactory";
import { ListTop5BookFactory } from "../factories/books/ListTop5BooksFactory";
import { EnsureAuthenticatedMiddleware } from "../middlewares/EnsureAuthenticatedMiddleware";

const booksRouter = Router();

booksRouter.get("/", (request, response) =>
  ListAllBookFactory().handle(request, response)
);

booksRouter.get("/views", (request, response) =>
  ListTop5BookFactory().handle(request, response)
);

booksRouter.get("/:id", (request, response) =>
  GetBookViewFactory().handle(request, response)
);

booksRouter.use(EnsureAuthenticatedMiddleware);

booksRouter.post("/", (request, response) =>
  CreateBookFactory().handle(request, response)
);

export { booksRouter };
