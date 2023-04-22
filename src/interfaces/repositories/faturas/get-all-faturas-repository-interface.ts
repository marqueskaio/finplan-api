import { FaturasModel } from "@prisma/client";

export interface GetAllFaturasRepositoryInterface{
    getAll(data: Partial<FaturasModel>): Promise<FaturasModel | null>
}