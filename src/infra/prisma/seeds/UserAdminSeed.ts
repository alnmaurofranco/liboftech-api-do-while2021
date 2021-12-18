import { hash } from "bcryptjs";
import { prisma } from "..";
import { User } from "../../../modules/accounts/domain/User";

const UserAdminSeed = async (): Promise<void> => {
  const data: User = {
    first_name: "Administrador",
    last_name: "ADM",
    email: "administrador@liboftech.dev",
    password: await hash("bleGmE", 12),
    isAdmin: true,
  };

  await prisma.user.create({
    data,
  });
};

UserAdminSeed()
  .then(() => console.log("✅ Success! User administrador created ✅"))
  .catch((err: any) => console.log(`❌ ${err}`));
