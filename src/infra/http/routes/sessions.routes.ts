import { Router } from "express";
import { AuthenticateUserFactory } from "../factories/AuthenticateUserFactory";
import { RegisterUserFactory } from "../factories/RegisterUserFactory";

const sessionsRouter = Router();

sessionsRouter.post("/register", (request, response) =>
  RegisterUserFactory().handle(request, response)
);

sessionsRouter.post("/authenticate", (request, response) =>
  AuthenticateUserFactory().handle(request, response)
);

export { sessionsRouter };
