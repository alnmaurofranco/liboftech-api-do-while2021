type GetProfileUserDTO = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  profile: {
    bio: string;
    github: string;
    linkedin: string;
  };
  books_favorites: {
    name: string;
  }[];
  createdAt: Date;
  updatedAt: Date;
};

export { GetProfileUserDTO };
