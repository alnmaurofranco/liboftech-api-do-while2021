import { GetProfileUser } from "./GetProfileUser";
import { Request, Response } from "express";

class GetProfileUserController {
  constructor(private readonly getProfileUser: GetProfileUser) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { user_id } = request;

      const result = await this.getProfileUser.execute({ user_id });

      return response.json(result);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { GetProfileUserController };
