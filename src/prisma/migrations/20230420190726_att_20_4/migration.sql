/*
  Warnings:

  - You are about to alter the column `dia_do_fechamento` on the `faturasmodel` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - Added the required column `banco` to the `FaturasModel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `faturasmodel` ADD COLUMN `banco` ENUM('NUBANK', 'INTER', 'C6', 'ITAU', 'BRADESCO', 'SANTANDER') NOT NULL,
    MODIFY `dia_do_fechamento` DATETIME(3) NOT NULL;
