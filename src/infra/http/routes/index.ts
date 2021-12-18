import { Router } from "express";
import { accountsRouter } from "./accounts.routes";
import { booksRouter } from "./books.routes";
import { sessionsRouter } from "./sessions.routes";

const router = Router();

router.get("/", (request, response) =>
  response.send("Welcome LibOFTechAPI 🔥")
);

router.use(sessionsRouter);
router.use("/accounts", accountsRouter);
router.use("/books", booksRouter);

export { router };
