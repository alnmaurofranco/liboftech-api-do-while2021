import { PrismaUsersRepository } from "../../../../modules/accounts/repositories/prisma/PrismaUsersRepository";
import { UpdateProfileUser } from "../../../../modules/accounts/useCases/UpdateProfileUser/UpdateProfileUser";
import { UpdateProfileUserController } from "../../../../modules/accounts/useCases/UpdateProfileUser/UpdateProfileUserController";
import { PrismaBooksRepository } from "../../../../modules/books/repositories/prisma/PrismaBooksRepository";

const UpdateProfileUserFactory = (): UpdateProfileUserController => {
  const usersRepository = new PrismaUsersRepository();
  const booksRepository = new PrismaBooksRepository();

  const updateProfileUser = new UpdateProfileUser(
    usersRepository,
    booksRepository
  );

  return new UpdateProfileUserController(updateProfileUser);
};

export { UpdateProfileUserFactory };
