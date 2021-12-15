import { prisma } from "../../../../infra/prisma";
import { Book } from "../../domain/Book";
import { CreateBookDTO } from "../../dtos/CreateBookDTO";
import { IBooksRepository } from "../IBooksRepository";

class PrismaBooksRepository implements IBooksRepository {
  private repository = prisma.book;

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
    const book = await this.repository.findUnique({
      where: {
        name,
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
}

export { PrismaBooksRepository };
