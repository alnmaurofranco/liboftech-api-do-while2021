import { Response, Request } from "express";
import { GetBookView } from "./GetBookView";

class GetBookViewController {
  constructor(private readonly getBookView: GetBookView) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const result = await this.getBookView.execute({ book_id: id });

      return response.json(result);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { GetBookViewController };
