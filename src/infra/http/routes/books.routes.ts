import { Router } from "express";
import { CreateBookFactory } from "../factories/books/CreateBookFactory";
import { ListAllBookFactory } from "../factories/books/ListAllBookFactory";
import { EnsureAuthenticatedMiddleware } from "../middlewares/EnsureAuthenticatedMiddleware";

const booksRouter = Router();

booksRouter.use(EnsureAuthenticatedMiddleware);

booksRouter.get("/", (request, response) =>
  ListAllBookFactory().handle(request, response)
);

booksRouter.post("/", (request, response) =>
  CreateBookFactory().handle(request, response)
);

export { booksRouter };
