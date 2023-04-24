import { FaturasModel } from "@prisma/client";
import { UsecaseInterface } from "../../../interfaces/usecases/usecase-interface";
import { GetAllFaturasRepositoryInterface } from "interfaces/repositories/get-all-faturas-repository-interface";


export class GetAllFaturasUsecase implements UsecaseInterface{

    constructor(private readonly faturaRepository: GetAllFaturasRepositoryInterface){

    }

    async execute (data: Partial<FaturasModel>): Promise<FaturasModel | null>{
        const fatura = await this.faturaRepository.getAll(data)
        return Promise.resolve(fatura)
    }

}