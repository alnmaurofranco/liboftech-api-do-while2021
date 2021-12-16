import { CreateBookDTO } from "../../dtos/CreateBookDTO";
import { IBooksRepository } from "../../repositories/IBooksRepository";
import { CreateBookError } from "./CreateBookError";

type CreateBookRequest = CreateBookDTO;

type CreateBookResponse = void;

class CreateBook {
  constructor(private readonly booksRepository: IBooksRepository) {}

  async execute({
    name,
    description,
    author,
    isbn,
  }: CreateBookRequest): Promise<CreateBookResponse> {
    if (!name && name.trim().length <= 0) {
      throw new CreateBookError.InvalidNameError();
    }

    if (!description && description.trim().length <= 0) {
      throw new CreateBookError.InvalidDescriptionError();
    }

    if (!author && author.trim().length <= 0) {
      throw new CreateBookError.InvalidAuthorError();
    }

    if (isbn.toFixed().trim().length < 8 || isbn.toFixed().trim().length > 9) {
      throw new CreateBookError.InvalidISBNError();
    }

    const bookNameAlreadyExists = await this.booksRepository.findByName(name);

    if (bookNameAlreadyExists) {
      throw new CreateBookError.AlreadyExistsNameError();
    }

    await this.booksRepository.create({
      name,
      description,
      author,
      isbn,
    });
  }
}

export { CreateBook };
