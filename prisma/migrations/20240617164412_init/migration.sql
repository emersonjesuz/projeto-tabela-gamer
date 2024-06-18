/*
  Warnings:

  - Added the required column `logo` to the `Players` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logo` to the `Squards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Players" ADD COLUMN     "logo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Squards" ADD COLUMN     "logo" TEXT NOT NULL;
