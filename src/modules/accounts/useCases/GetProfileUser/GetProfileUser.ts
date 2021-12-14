import { GetProfileUserDTO } from "../../dtos/GetProfileUserDTO";
import { GetProfileUserMapper } from "../../mappers/GetProfileUserMapper";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { GetProfileUserError } from "./GetProfileUserError";

type GetProfileUserRequest = {
  user_id: string;
};

type GetProfileUserResponse = GetProfileUserDTO;

class GetProfileUser {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute({
    user_id,
  }: GetProfileUserRequest): Promise<GetProfileUserResponse> {
    const userExists = await this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new GetProfileUserError.UserNotFound();
    }

    return GetProfileUserMapper.toDto(userExists);
  }
}

export { GetProfileUser };
