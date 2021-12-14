import { Request, Response } from "express";
import { RegisterUser } from "./RegisterUser";

class RegisterUserController {
  constructor(private readonly registerUser: RegisterUser) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { first_name, last_name, email, password } = request.body;

      await this.registerUser.execute({
        first_name,
        last_name,
        email,
        password,
      });

      return response.status(201).json();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { RegisterUserController };
