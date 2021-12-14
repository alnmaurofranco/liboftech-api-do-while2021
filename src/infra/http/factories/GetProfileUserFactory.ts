import { PrismaUsersRepository } from "../../../modules/accounts/repositories/prisma/PrismaUsersRepository";
import { GetProfileUser } from "../../../modules/accounts/useCases/GetProfileUser/GetProfileUser";
import { GetProfileUserController } from "../../../modules/accounts/useCases/GetProfileUser/GetProfileUserController";

const GetProfileUserFactory = (): GetProfileUserController => {
  const usersRepository = new PrismaUsersRepository();

  const getProfileUser = new GetProfileUser(usersRepository);

  return new GetProfileUserController(getProfileUser);
};

export { GetProfileUserFactory };
