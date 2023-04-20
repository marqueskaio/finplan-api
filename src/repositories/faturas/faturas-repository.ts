import { FaturasModel, Prisma } from "@prisma/client";
import { PostFaturasRepositoryInterface } from "interfaces/repositories/post-faturas-repository-interface";
import DB from "../../../src/prisma/index"

export class FaturasRepository implements PostFaturasRepositoryInterface{
    
    async create (data: Omit<FaturasModel, "id">): Promise<FaturasModel> {
        return DB.FaturasModel.create({data:data})

    }
}