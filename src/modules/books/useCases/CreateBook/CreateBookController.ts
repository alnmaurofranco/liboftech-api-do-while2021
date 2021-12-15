import { Request, Response } from "express";
import { CreateBook } from "./CreateBook";

class CreateBookController {
  constructor(private readonly createBook: CreateBook) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, description, author, isbn } = request.body;

      await this.createBook.execute({
        name,
        description,
        author,
        isbn,
      });

      return response.status(201).json();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreateBookController };
