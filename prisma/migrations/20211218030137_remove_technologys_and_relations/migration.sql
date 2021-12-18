/*
  Warnings:

  - You are about to drop the `technologys` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "technologys" DROP CONSTRAINT "technologys_profile_id_fkey";

-- DropTable
DROP TABLE "technologys";
