import { User } from "../domain/User";

type AuthenticateUserDTO = {
  user: Omit<User, "password" | "isAdmin">;
  token: string;
};

export { AuthenticateUserDTO };
