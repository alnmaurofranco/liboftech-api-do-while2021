import { User } from "../../domain/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

import { compare } from "bcryptjs";
import { AuthenticateUserError } from "./AuthenticateUserError";

type AuthenticateUserRequest = {
  email: string;
  password: string;
};

type AuthenticateUserResponse = {
  user: Pick<
    User,
    "first_name" | "last_name" | "email" | "createdAt" | "updatedAt"
  >;
  token?: string;
};

class AuthenticateUser {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateUserRequest): Promise<AuthenticateUserResponse> {
    const userExists = await this.usersRepository.findByEmail(email);

    if (!userExists) {
      throw new AuthenticateUserError.InvalidEmailOrPasswordError();
    }

    const comparePassword = await compare(password, userExists.password);

    if (!comparePassword) {
      throw new AuthenticateUserError.InvalidEmailOrPasswordError();
    }

    // token

    return {
      user: userExists,
      token: "",
    };
  }
}

export { AuthenticateUser };
