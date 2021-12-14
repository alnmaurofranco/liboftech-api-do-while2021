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
  //technologys?: {};
  createdAt: Date;
  updatedAt: Date;
};

export { GetProfileUserDTO };
