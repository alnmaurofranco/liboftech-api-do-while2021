import { Router } from "express";
import { UpdateProfileUserFactory } from "../factories/accounts/UpdateProfileUserFactory";
import { GetProfileUserFactory } from "../factories/accounts/GetProfileUserFactory";
import { EnsureAuthenticatedMiddleware } from "../middlewares/EnsureAuthenticatedMiddleware";

const accountsRouter = Router();

accountsRouter.use(EnsureAuthenticatedMiddleware);

accountsRouter.get("/profile", (request, response) =>
  GetProfileUserFactory().handle(request, response)
);

accountsRouter.put("/edit-profile", (request, response) =>
  UpdateProfileUserFactory().handle(request, response)
);

export { accountsRouter };
