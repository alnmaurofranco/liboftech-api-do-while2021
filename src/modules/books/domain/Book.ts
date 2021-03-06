class Book {
  id?: string;
  name: string;
  description: string;
  author: string;
  isbn: number;
  view?: number;
  createdAt?: Date;
  updatedAt?: Date;

  private constructor({ name, description, author, isbn }: Book) {
    const book = Object.assign(this, {
      name,
      description,
      author,
      isbn,
    });

    return book;
  }
}

export { Book };
