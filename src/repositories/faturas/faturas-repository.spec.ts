import { Bancos, FaturasModel } from "@prisma/client"
import { PostFaturasRepositoryInterface } from "interfaces/repositories/post-faturas-repository-interface"
import { PostFaturaUseCase } from "../../usecases/faturas/post-faturas/post-faturas-usecase"



const faturasModel = (): FaturasModel => {
    return { id: 1, mes_fatura: "Janeiro", banco: Bancos.ITAU, dia_do_fechamento: new Date(23 / 4 / 2023), dia_do_vencimento: new Date(30 / 4 / 2023) }
}

describe('FaturasRepository', () => {
    test('should create and return fatura on success', async () => {

        class FaturasRepositoryStub implements PostFaturasRepositoryInterface {
            create(): Promise<FaturasModel> {
                return Promise.resolve(faturasModel())
            }
        }

        const faturasRepositoryStub = new FaturasRepositoryStub()
        const sut = new PostFaturaUseCase(faturasRepositoryStub)
        const spy = jest.spyOn(faturasRepositoryStub, 'create')
        await sut.execute({ mes_fatura: "Janeiro", banco: Bancos.ITAU, dia_do_fechamento: new Date(23 / 4 / 2023), dia_do_vencimento: new Date(30 / 4 / 2023) })
        expect(spy).toHaveBeenCalledWith({ mes_fatura: "Janeiro", banco: Bancos.ITAU, dia_do_fechamento: new Date(23 / 4 / 2023), dia_do_vencimento: new Date(30 / 4 / 2023) })
    })
})