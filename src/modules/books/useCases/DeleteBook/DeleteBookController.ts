import { DeleteBook } from "./DeleteBook";
import { Response, Request } from "express";

class DeleteBookController {
  constructor(private readonly deleteBook: DeleteBook) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      await this.deleteBook.execute({ book_id: id });

      return response.status(204).json();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { DeleteBookController };
