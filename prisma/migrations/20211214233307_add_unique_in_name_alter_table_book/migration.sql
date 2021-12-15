/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `books` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "books_name_key" ON "books"("name");
