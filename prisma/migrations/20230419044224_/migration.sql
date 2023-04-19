-- CreateTable
CREATE TABLE `FaturasModel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mes_fatura` VARCHAR(191) NOT NULL,
    `dia_do_fechamento` VARCHAR(191) NOT NULL,
    `dia_do_vencimento` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
