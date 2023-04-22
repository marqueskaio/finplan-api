import { Bancos, FaturasModel } from "@prisma/client"
import { GetAllFaturasRepositoryInterface } from "interfaces/repositories/faturas/get-all-faturas-repository-interface"
import { GetAllFaturasUsecase } from "usecases/faturas/get-all-faturas/get-all-faturas-usecase"

const faturasModel = (): FaturasModel => {
    return {
        id: 1,
        mes_fatura: "Janeiro",
        banco: Bancos.ITAU,
        dia_do_fechamento: new Date(23/4/2023),
        dia_do_vencimento: new Date(30/4/2023)
    }
}


describe('GetAllFaturasUsecase', ()=>{
    test('Should return a fatura on success',  ()=>{
        class GetAllFaturasRepositoryStub implements GetAllFaturasRepositoryInterface{
            async getAll(): Promise<FaturasModel | null> {
                return Promise.resolve(faturasModel())
            }
        }

        const getAllFaturasRepositoryStub = new GetAllFaturasRepositoryStub()
        const sut = new GetAllFaturasUsecase(getAllFaturasRepositoryStub)
        const result = sut.getAll("Janeiro")

        expect(result).toEqual({id: 1,
            mes_fatura: "Janeiro",
            banco: Bancos.ITAU,
            dia_do_fechamento: new Date(23/4/2023),
            dia_do_vencimento: new Date(30/4/2023)})
    });
})