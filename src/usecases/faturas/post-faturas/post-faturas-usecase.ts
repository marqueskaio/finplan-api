import { FaturasModel } from "@prisma/client";
import { UsecaseInterface } from "../../../interfaces/usecases/usecase-interface";
<<<<<<< HEAD
import { PostFaturasRepositoryInterface } from "../../../interfaces/repositories/post-faturas-repository-interface";
=======
import { PostFaturasRepositoryInterface } from "../../../interfaces/repositories/faturas/post-faturas-repository-interface";
>>>>>>> 9a43f586e296a7c57b66be5d118b8125af8d2fcd

export class PostFaturaUseCase implements UsecaseInterface{

    constructor(private readonly faturaRepository: PostFaturasRepositoryInterface){

    }

    async execute(data: Omit<FaturasModel, 'id'>): Promise<any>{
        const fatura = await this.faturaRepository.create(data)
        return Promise.resolve(fatura)
    }
}

