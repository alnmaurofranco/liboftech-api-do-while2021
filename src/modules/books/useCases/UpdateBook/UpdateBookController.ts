import { UpdateBook } from "./UpdateBook";
import { Response, Request } from "express";

class UpdateBookController {
  constructor(private readonly updateBook: UpdateBook) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { name, description, author, isbn } = request.body;

      const result = await this.updateBook.execute({
        book_id: id,
        name,
        description,
        author,
        isbn,
      });

      return response.json(result);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { UpdateBookController };
