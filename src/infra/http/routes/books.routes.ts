import { Router } from "express";
import { CreateBookFactory } from "../factories/books/CreateBookFactory";
import { DeleteBookFactory } from "../factories/books/DeleteBookFactory";
import { GetBookViewFactory } from "../factories/books/GetBookViewFactory";
import { ListAllBookFactory } from "../factories/books/ListAllBookFactory";
import { ListTop5BookFactory } from "../factories/books/ListTop5BooksFactory";
import { UpdateBookFactory } from "../factories/books/UpdateBookFactory";
import { EnsureAuthenticatedMiddleware } from "../middlewares/EnsureAuthenticatedMiddleware";
import { EnsureIsAdministradorMiddleware } from "../middlewares/EnsureIsAdministradorMiddleware";

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

booksRouter.use(EnsureAuthenticatedMiddleware, EnsureIsAdministradorMiddleware);

booksRouter.post("/", (request, response) =>
  CreateBookFactory().handle(request, response)
);

booksRouter.put("/:id", (request, response) =>
  UpdateBookFactory().handle(request, response)
);

booksRouter.delete("/:id", (request, response) =>
  DeleteBookFactory().handle(request, response)
);

export { booksRouter };
