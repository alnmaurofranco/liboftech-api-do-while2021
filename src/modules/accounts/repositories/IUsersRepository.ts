import { User } from "../domain/User";
import { CreateUserDTO } from "../dtos/CreateUserDTO";

interface IUsersRepository {
  findById(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  create(dto: CreateUserDTO): Promise<void>;
}

export { IUsersRepository };
