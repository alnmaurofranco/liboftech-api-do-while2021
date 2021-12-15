import { Book } from "../domain/Book";
import { CreateBookDTO } from "../dtos/CreateBookDTO";

interface IBooksRepository {
  findById(id: string): Promise<Book>;
  findByName(name: string): Promise<Book>;
  create(dto: CreateBookDTO): Promise<void>;
}

export { IBooksRepository };
