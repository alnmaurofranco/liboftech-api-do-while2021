import { User } from "../../domain/User";
import { UpdateProfileUserDTO } from "../../dtos/UpdateProfileUserDTO";
import { GetProfileUserMapper } from "../../mappers/GetProfileUserMapper";
import { UpdateProfileUserMapper } from "../../mappers/UpdateProfileUserMapper";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { UpdateProfileUserError } from "./UpdateProfileUserError";

type UpdateProfileUserRequest = {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  bio?: string;
  linkedin?: string;
  github?: string;
};

type UpdateProfileUserResponse = UpdateProfileUserDTO;

class UpdateProfileUser {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute({
    user_id,
    first_name,
    last_name,
    email,
    bio,
    linkedin,
    github,
  }: UpdateProfileUserRequest): Promise<UpdateProfileUserResponse> {
    const userExists = await this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new UpdateProfileUserError.UserNotFound();
    }

    if (!first_name && first_name.trim().length <= 0) {
      throw new UpdateProfileUserError.InvalidFirstNameError();
    }

    if (!last_name && last_name.trim().length <= 0) {
      throw new UpdateProfileUserError.InvalidLastNameError();
    }

    if ((!email && email.trim().length <= 0) || email.trim().length >= 180) {
      throw new UpdateProfileUserError.InvalidEmailError();
    }

    if (email !== userExists.email) {
      const emailUserAlreadyExists = await this.usersRepository.findByEmail(
        email
      );

      if (emailUserAlreadyExists) {
        throw new UpdateProfileUserError.AlreadyExistsEmailError(email);
      }
    }

    userExists.first_name = first_name;
    userExists.last_name = last_name;
    userExists.email = email;
    userExists.profile.bio = bio;
    userExists.profile.linkedin = linkedin;
    userExists.profile.github = github;

    const userUpdated = await this.usersRepository.save(userExists);

    return UpdateProfileUserMapper.toDto(userUpdated);
  }
}

export { UpdateProfileUser };
