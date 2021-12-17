import { BooksOnUsers } from "@prisma/client";
import { prisma } from "../../../../infra/prisma";
import { Book } from "../../domain/Book";
import { CreateBookDTO } from "../../dtos/CreateBookDTO";
import { IBooksRepository } from "../IBooksRepository";

class PrismaBooksRepository implements IBooksRepository {
  private repository = prisma.book;
  private booksOnUsersRepository = prisma.booksOnUsers;

  async findAll(): Promise<Book[]> {
    return this.repository.findMany();
  }

  async findBooksWithManyViews(): Promise<Book[]> {
    return this.repository.findMany({
      orderBy: {
        view: "desc",
      },
    });
  }

  async findById(id: string): Promise<Book> {
    const book = await this.repository.findUnique({
      where: {
        id,
      },
    });

    if (!book) return null;
    return book;
  }

  async findByName(name: string): Promise<Book> {
    // const [{ id, name, description, author, isbn }] = (await this.prisma
    //   .$queryRaw<Book>`SELECT * FROM books WHERE LOWER(name)=LOWER(${names})`) as any;

    // const book = { id, name, description, author, isbn };
    // if (!book) return null;

    // return book;

    const book = await this.repository.findFirst({
      where: {
        name: {
          contains: name,
        },
      },
    });

    if (!book) return null;
    return book;
  }

  async create({
    name,
    description,
    author,
    isbn,
  }: CreateBookDTO): Promise<void> {
    const data = {
      name,
      description,
      author,
      isbn,
    };

    await this.repository.create({ data });
  }

  async save(book: Book): Promise<Book> {
    const data = book;

    const bookUpdated = await this.repository.update({
      where: {
        id: book.id,
      },
      data,
    });

    return bookUpdated;
  }

  async delete(book: Book): Promise<void> {
    await this.repository.delete({
      where: {
        id: book.id,
      },
    });
  }

  async deleteByRelationBooksAndUsers({
    book_id,
    user_id,
  }: BooksOnUsers): Promise<void> {
    await this.booksOnUsersRepository.delete({
      where: {
        user_id_book_id: {
          book_id,
          user_id,
        },
      },
    });

    // booksAndUsersID.map(async (bookAndUser) => {
    //   await this.booksOnUsersRepository.delete({
    //     where: {
    //       user_id_book_id: {
    //         user_id: bookAndUser.user_id,
    //         book_id: bookAndUser.book_id,
    //       },
    //     },
    //   });
    // });
  }
}

export { PrismaBooksRepository };
