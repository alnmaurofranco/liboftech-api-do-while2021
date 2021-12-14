import { User } from "../domain/User";
import { GetProfileUserDTO } from "../dtos/GetProfileUserDTO";

const GetProfileUserMapper = {
  toDto(raw: User): GetProfileUserDTO {
    return {
      id: raw.id,
      first_name: raw.first_name,
      last_name: raw.last_name,
      email: raw.email,

      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
  },
};

export { GetProfileUserMapper };
