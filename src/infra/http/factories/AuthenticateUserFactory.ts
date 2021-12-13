import { PrismaUsersRepository } from "../../../modules/users/repositories/prisma/PrismaUsersRepository";
import { AuthenticateUser } from "../../../modules/users/useCases/AuthenticateUser/AuthenticateUser";
import { AuthenticateUserController } from "../../../modules/users/useCases/AuthenticateUser/AuthenticateUserController";

const AuthenticateUserFactory = (): AuthenticateUserController => {
  const usersRepository = new PrismaUsersRepository();

  const authenticateUser = new AuthenticateUser(usersRepository);

  return new AuthenticateUserController(authenticateUser);
};

export { AuthenticateUserFactory };
