import { User } from "../domain/User";
import { GetProfileUserDTO } from "../dtos/GetProfileUserDTO";

const GetProfileUserMapper = {
  toDto(raw: User): GetProfileUserDTO {
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
      books_favorites: raw.books_favorites.map((bookFav) => {
        return {
          name: bookFav.book.name,
        };
      }),
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    };
  },
};

export { GetProfileUserMapper };
