import { IUsersRepository } from "../../repositories/IUsersRepository";
import { RegisterUserError } from "./RegisterUserError";

import { hash } from "bcryptjs";

type RegisterUserResponse = void;

type RegisterUserRequest = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

class RegisterUser {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute({
    first_name,
    last_name,
    email,
    password,
  }: RegisterUserRequest): Promise<RegisterUserResponse> {
    if (!email && email.trim().length <= 0) {
      throw new RegisterUserError.InvalidEmailError();
    }

    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new RegisterUserError.AlreadyExistsEmailError(email);
    }

    const passwordHashed = await hash(password, 12);

    await this.usersRepository.create({
      first_name,
      last_name,
      email,
      password: passwordHashed,
    });
  }
}

export { RegisterUser };
