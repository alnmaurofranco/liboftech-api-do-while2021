import { AuthenticateUser } from "./AuthenticateUser";
import { Request, Response } from "express";

class AuthenticateUserController {
  constructor(private readonly authenticateUser: AuthenticateUser) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body;

      const result = await this.authenticateUser.execute({ email, password });

      return response.json(result);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { AuthenticateUserController };
