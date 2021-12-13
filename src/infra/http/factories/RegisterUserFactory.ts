import { PrismaUsersRepository } from "../../../modules/users/repositories/prisma/PrismaUsersRepository";
import { RegisterUser } from "../../../modules/users/useCases/RegisterUser/RegisterUser";
import { RegisterUserController } from "../../../modules/users/useCases/RegisterUser/RegisterUserController";

const RegisterUserFactory = (): RegisterUserController => {
  const usersRepository = new PrismaUsersRepository();

  const registerUser = new RegisterUser(usersRepository);

  return new RegisterUserController(registerUser);
};

export { RegisterUserFactory };
