import { Router } from "express";
import { RegisterUserFactory } from "../factories/RegisterUserFactory";

const sessionsRouter = Router();

sessionsRouter.post("/register", (request, response) =>
  RegisterUserFactory().handle(request, response)
);

export { sessionsRouter };
