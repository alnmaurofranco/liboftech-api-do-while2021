import { Profile, BooksOnUsers } from "@prisma/client";
import { Book } from "../../books/domain/Book";

class User {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  profile?: Profile;
  books_favorites?: (BooksOnUsers & {
    book?: Book;
  })[];
  createdAt?: Date;
  updatedAt?: Date;

  private constructor({ first_name, last_name, email, password }: User) {
    const user = Object.assign(this, {
      first_name,
      last_name,
      email,
      password,
    });

    return user;
  }
}

export { User };
