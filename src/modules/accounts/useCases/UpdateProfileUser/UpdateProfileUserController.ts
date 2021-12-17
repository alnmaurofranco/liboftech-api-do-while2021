import { Request, Response } from "express";
import { BooksOnUsers } from "@prisma/client";
import { UpdateProfileUser } from "./UpdateProfileUser";

class UpdateProfileUserController {
  constructor(private readonly updateProfileUser: UpdateProfileUser) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { user_id } = request;
      const { first_name, last_name, email, bio, linkedin, github, books } =
        request.body;

      let booksArray: BooksOnUsers[] = [];

      if (books) {
        booksArray = books.map((book_id: string) => {
          return {
            user_id,
            book_id,
          };
        });
      }

      const result = await this.updateProfileUser.execute({
        user_id,
        first_name,
        last_name,
        email,
        bio,
        linkedin,
        github,
        books: booksArray,
      });

      return response.json(result);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { UpdateProfileUserController };
