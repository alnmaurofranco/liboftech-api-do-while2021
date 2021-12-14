import { User } from "../domain/User";

type AuthenticateUserDTO = {
  user: Omit<User, "password">;
  token: string;
};

export { AuthenticateUserDTO };
