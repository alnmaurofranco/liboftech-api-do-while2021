/*
  Warnings:

  - You are about to drop the `BooksOnUsers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BooksOnUsers" DROP CONSTRAINT "BooksOnUsers_book_id_fkey";

-- DropForeignKey
ALTER TABLE "BooksOnUsers" DROP CONSTRAINT "BooksOnUsers_user_id_fkey";

-- DropTable
DROP TABLE "BooksOnUsers";

-- CreateTable
CREATE TABLE "books_users" (
    "user_id" TEXT NOT NULL,
    "book_id" TEXT NOT NULL,

    CONSTRAINT "books_users_pkey" PRIMARY KEY ("user_id","book_id")
);

-- AddForeignKey
ALTER TABLE "books_users" ADD CONSTRAINT "books_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books_users" ADD CONSTRAINT "books_users_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
