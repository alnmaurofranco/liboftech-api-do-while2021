import { Book } from "../../domain/Book";
import { IBooksRepository } from "../../repositories/IBooksRepository";
import { UpdateBookError } from "./UpdateBookError";

type UpdateBookRequest = {
  id: string;
  name: string;
  description: string;
  author: string;
  isbn: number;
};

type UpdateBookResponse = Book;

class UpdateBook {
  constructor(private readonly booksRepository: IBooksRepository) {}

  async execute({
    id,
    name,
    description,
    author,
    isbn,
  }: UpdateBookRequest): Promise<UpdateBookResponse> {
    const bookExists = await this.booksRepository.findById(id);

    if (!bookExists) {
      throw new UpdateBookError.BookNotFound();
    }

    if (!name && name.trim().length <= 0) {
      throw new UpdateBookError.InvalidNameError();
    }

    if (!description && description.trim().length <= 0) {
      throw new UpdateBookError.InvalidDescriptionError();
    }

    if (!author && author.trim().length <= 0) {
      throw new UpdateBookError.InvalidAuthorError();
    }

    if (isbn.toFixed().trim().length < 8 || isbn.toFixed().trim().length > 9) {
      throw new UpdateBookError.InvalidISBNError();
    }

    if (name !== bookExists.name) {
      const bookNameAlreadyExists = await this.booksRepository.findByName(name);

      if (bookNameAlreadyExists) {
        throw new UpdateBookError.NameBookAlreadyExists();
      }
    }

    bookExists.name = name;
    bookExists.description = description;
    bookExists.author = author;
    bookExists.isbn = isbn;

    const updatedBook = await this.booksRepository.save(bookExists);

    return updatedBook;
  }
}

export { UpdateBook };
