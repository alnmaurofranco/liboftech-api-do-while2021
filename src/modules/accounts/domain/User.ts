import { Profile } from "@prisma/client";

class User {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  profile?: Profile;
  createdAt?: Date;
  updatedAt?: Date;

  private constructor({ first_name, last_name, email, password }: User) {
    const user = Object.assign(this, {
      first_name,
      last_name,
      email,
      password,
    });

    return user;
  }
}

export { User };
