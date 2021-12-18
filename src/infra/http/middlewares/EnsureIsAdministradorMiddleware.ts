import { Response, Request, NextFunction } from "express";
import { PrismaUsersRepository } from "../../../modules/accounts/repositories/prisma/PrismaUsersRepository";

type EnsureIsAdministradorMiddleware = Response | NextFunction;

const EnsureIsAdministradorMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<EnsureIsAdministradorMiddleware> => {
  const { user_id } = request;

  if (!user_id) return response.status(401).send();

  try {
    const usersRepository = new PrismaUsersRepository();

    const userLogged = await usersRepository.findById(user_id);

    if (!userLogged.isAdmin) {
      return response
        .status(403)
        .json({ error: "You haven't permission of admin" });
    }

    next();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
};

export { EnsureIsAdministradorMiddleware };
