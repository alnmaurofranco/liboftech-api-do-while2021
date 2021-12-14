import { PrismaUsersRepository } from "../../../modules/accounts/repositories/prisma/PrismaUsersRepository";
import { RegisterUser } from "../../../modules/accounts/useCases/RegisterUser/RegisterUser";
import { RegisterUserController } from "../../../modules/accounts/useCases/RegisterUser/RegisterUserController";

const RegisterUserFactory = (): RegisterUserController => {
  const usersRepository = new PrismaUsersRepository();

  const registerUser = new RegisterUser(usersRepository);

  return new RegisterUserController(registerUser);
};

export { RegisterUserFactory };
