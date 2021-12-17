import { BooksOnUsers } from "@prisma/client";
import { Book } from "../domain/Book";
import { CreateBookDTO } from "../dtos/CreateBookDTO";

interface IBooksRepository {
  findAll(): Promise<Book[]>;
  findBooksWithManyViews(): Promise<Book[]>;
  findById(id: string): Promise<Book>;
  findByName(name: string): Promise<Book>;
  create(dto: CreateBookDTO): Promise<void>;
  save(book: Book): Promise<Book>;
  delete(book: Book): Promise<void>;
  deleteByRelationBooksAndUsers(bookAndUserID: BooksOnUsers): Promise<void>;
}

export { IBooksRepository };
