import { PrismaUsersRepository } from "../../../../modules/accounts/repositories/prisma/PrismaUsersRepository";
import { UpdateProfileUser } from "../../../../modules/accounts/useCases/UpdateProfileUser/UpdateProfileUser";
import { UpdateProfileUserController } from "../../../../modules/accounts/useCases/UpdateProfileUser/UpdateProfileUserController";

const UpdateProfileUserFactory = (): UpdateProfileUserController => {
  const usersRepository = new PrismaUsersRepository();

  const updateProfileUser = new UpdateProfileUser(usersRepository);

  return new UpdateProfileUserController(updateProfileUser);
};

export { UpdateProfileUserFactory };
