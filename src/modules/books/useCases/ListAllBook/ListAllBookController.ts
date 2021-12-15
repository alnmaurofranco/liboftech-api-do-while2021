import { ListAllBook } from "./ListAllBook";
import { Request, Response } from "express";

class ListAllBookController {
  constructor(private readonly listAllBooks: ListAllBook) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const result = await this.listAllBooks.execute();

      return response.json(result);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListAllBookController };
