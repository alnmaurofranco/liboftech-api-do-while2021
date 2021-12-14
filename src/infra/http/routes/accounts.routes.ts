import { Router } from "express";
import { GetProfileUserFactory } from "../factories/GetProfileUserFactory";

const accountsRouter = Router();

accountsRouter.get("/profile", (request, response) =>
  GetProfileUserFactory().handle(request, response)
);

export { accountsRouter };
