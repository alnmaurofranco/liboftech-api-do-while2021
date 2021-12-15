import { Router } from "express";
import { GetProfileUserFactory } from "../factories/GetProfileUserFactory";
import { EnsureAuthenticatedMiddleware } from "../middlewares/EnsureAuthenticatedMiddleware";

const accountsRouter = Router();

accountsRouter.use(EnsureAuthenticatedMiddleware);

accountsRouter.get("/profile", (request, response) =>
  GetProfileUserFactory().handle(request, response)
);

export { accountsRouter };
