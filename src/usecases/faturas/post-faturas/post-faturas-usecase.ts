import { FaturasModel } from "@prisma/client";
import { UsecaseInterface } from "../../../interfaces/usecases/usecase-interface";
import { PostFaturasRepositoryInterface } from "interfaces/repositories/post-faturas-repository-interface";

export class PostFaturaUseCase implements UsecaseInterface{

    constructor(private readonly faturaRepository: PostFaturasRepositoryInterface){

    }

    async execute(data: Omit<FaturasModel, 'id'>): Promise<any>{
        const fatura = await this.faturaRepository.create(data)
        return Promise.resolve(fatura)
    }
}

