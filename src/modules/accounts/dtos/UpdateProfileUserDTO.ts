type UpdateProfileUserDTO = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  profile: {
    bio: string;
    github: string;
    linkedin: string;
  };
  createdAt: Date;
  updatedAt: Date;
};

export { UpdateProfileUserDTO };
