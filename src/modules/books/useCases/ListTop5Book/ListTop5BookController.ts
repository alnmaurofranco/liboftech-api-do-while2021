import { Response, Request } from "express";
import { ListTop5Book } from "./ListTop5Book";

class ListTop5BookController {
  constructor(private readonly listTop5Book: ListTop5Book) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const result = await this.listTop5Book.execute();

      return response.json(result);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListTop5BookController };
