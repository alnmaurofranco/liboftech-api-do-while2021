import { User } from "../domain/User";

type GetProfileUserDTO = Omit<User, "password">;

export { GetProfileUserDTO };
