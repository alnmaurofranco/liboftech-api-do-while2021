import { Router } from "express";
import { CreateBookFactory } from "../factories/books/CreateBookFactory";
import { EnsureAuthenticatedMiddleware } from "../middlewares/EnsureAuthenticatedMiddleware";

const booksRouter = Router();

booksRouter.use(EnsureAuthenticatedMiddleware);

booksRouter.post("/", (request, response) =>
  CreateBookFactory().handle(request, response)
);

export { booksRouter };
