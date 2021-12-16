import { User } from "../domain/User";
import { UpdateProfileUserDTO } from "../dtos/UpdateProfileUserDTO";

const UpdateProfileUserMapper = {
  toDto(raw: User): UpdateProfileUserDTO {
    return {
      id: raw.id,
      first_name: raw.first_name,
      last_name: raw.last_name,
      email: raw.email,
      profile: {
        bio: raw.profile.bio,
        github: raw.profile.github,
        linkedin: raw.profile.linkedin,
      },
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
  },
};

export { UpdateProfileUserMapper };
