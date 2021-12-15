import { prisma } from "../../../../infra/prisma";
import { User } from "../../domain/User";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

class PrismaUsersRepository implements IUsersRepository {
  private repository = prisma.user;

  async findById(id: string): Promise<User> {
    const user = await this.repository.findFirst({
      where: {
        id,
      },
      include: {
        profile: true,
        // books_favorites: {
        //   include: {
        //     book: true,
        //   },
        // },
      },
    });

    if (!user) return null;

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findUnique({
      where: {
        email: email.toLowerCase(),
      },
    });

    if (!user) return null;

    return user;
  }

  async create({
    first_name,
    last_name,
    email,
    password,
  }: CreateUserDTO): Promise<void> {
    const data = {
      first_name,
      last_name,
      email: email.toLowerCase(),
      password,
    };

    await this.repository.create({
      data: {
        ...data,
        profile: {
          create: {
            bio: "Adicione uma biografia...",
          },
        },
      },
    });
  }
}

export { PrismaUsersRepository };
