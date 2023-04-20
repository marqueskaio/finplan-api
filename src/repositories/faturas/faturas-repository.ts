import { FaturasModel} from "@prisma/client";
import { PostFaturasRepositoryInterface } from "interfaces/repositories/post-faturas-repository-interface";
const DB = require('../../prisma/index')

export class FaturasRepository implements PostFaturasRepositoryInterface{
    
    async create (data: Omit<FaturasModel, "id">): Promise<FaturasModel> {
        return DB.FaturasModel.create({data:data})

    }
}