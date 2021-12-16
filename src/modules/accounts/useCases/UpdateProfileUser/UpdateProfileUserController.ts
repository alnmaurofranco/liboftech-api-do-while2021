import { UpdateProfileUser } from "./UpdateProfileUser";
import { Request, Response } from "express";

class UpdateProfileUserController {
  constructor(private readonly updateProfileUser: UpdateProfileUser) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { user_id } = request;
      const { first_name, last_name, email, bio, linkedin, github } =
        request.body;

      const result = await this.updateProfileUser.execute({
        user_id,
        first_name,
        last_name,
        email,
        bio,
        linkedin,
        github,
      });

      return response.json(result);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { UpdateProfileUserController };
