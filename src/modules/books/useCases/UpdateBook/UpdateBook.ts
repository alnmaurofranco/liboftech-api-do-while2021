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

    bookExists.name = name;
    bookExists.description = description;
    bookExists.author = author;
    bookExists.isbn = isbn;

    const bookNameAlreadyExists = await this.booksRepository.findByName(
      bookExists.name
    );

    if (bookNameAlreadyExists) {
      throw new UpdateBookError.NameBookAlreadyExists();
    }

    const updatedBook = await this.booksRepository.save(bookExists);

    return updatedBook;
  }
}

export { UpdateBook };
