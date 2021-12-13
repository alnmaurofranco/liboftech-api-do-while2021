import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { IUsersRepository } from "../../repositories/IUsersRepository";

import { AuthenticateUserError } from "./AuthenticateUserError";
import { AuthenticateUserDTO } from "../../dtos/AuthenticateUserDTO";
import { AuthenticateUserMapper } from "../../mappers/AuthenticateUserMapper";
import { AuthConfig } from "../../../../config/AuthConfig";

type AuthenticateUserRequest = {
  email: string;
  password: string;
};

type AuthenticateUserResponse = AuthenticateUserDTO;

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
    const { secret, tokenExpiresIn } = AuthConfig;

    const token = sign({}, secret, {
      expiresIn: tokenExpiresIn,
      subject: userExists.id,
    });

    return AuthenticateUserMapper.toDto(userExists, token);
  }
}

export { AuthenticateUser };
