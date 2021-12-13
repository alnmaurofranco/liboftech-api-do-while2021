import { User } from "../domain/User";
import { AuthenticateUserDTO } from "../dtos/AuthenticateUserDTO";

const AuthenticateUserMapper = {
  toDto(raw: User, token: string): AuthenticateUserDTO {
    return {
      user: {
        id: raw.id,
        first_name: raw.first_name,
        last_name: raw.last_name,
        email: raw.email,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      token,
    };
  },
};

export { AuthenticateUserMapper };
