import { Router } from "express";
import { AuthenticateUserFactory } from "../factories/accounts/AuthenticateUserFactory";
import { RegisterUserFactory } from "../factories/accounts/RegisterUserFactory";

const sessionsRouter = Router();

sessionsRouter.post("/register", (request, response) =>
  RegisterUserFactory().handle(request, response)
);

sessionsRouter.post("/authenticate", (request, response) =>
  AuthenticateUserFactory().handle(request, response)
);

export { sessionsRouter };
