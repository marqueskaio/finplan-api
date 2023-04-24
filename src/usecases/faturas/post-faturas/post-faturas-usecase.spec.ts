import { Bancos, FaturasModel } from "@prisma/client";
import { PostFaturaUseCase } from "./post-faturas-usecase"
import { PostFaturasRepositoryInterface } from "interfaces/repositories/post-faturas-repository-interface";


const faturasModel = (): FaturasModel => {
    return {
        id: 1,
        mes_fatura: "Janeiro",
        banco: Bancos.ITAU,
        dia_do_fechamento: new Date(23/4/2023),
        dia_do_vencimento: new Date(30/4/2023)
    }
}


describe('PostFaturasUsecase', ()=>{

    test('Deve retornar os dados de uma fatura criada corretamente', async()=>{

        class PostFaturaRepositoryStub implements PostFaturasRepositoryInterface {
            create(): Promise<FaturasModel> {
              return Promise.resolve(faturasModel());
            }
          }

        const postFaturasRepositoryStub = new PostFaturaRepositoryStub()
        const sut = new PostFaturaUseCase(postFaturasRepositoryStub)
        const spy = jest.spyOn(postFaturasRepositoryStub, 'create')
        await sut.execute({
            mes_fatura: "Janeiro",
            banco: Bancos.ITAU,
            dia_do_fechamento: new Date(23/4/2023),
            dia_do_vencimento: new Date(30/4/2023)
        })
        expect(spy).toHaveBeenCalledWith({
            mes_fatura: "Janeiro",
            banco: Bancos.ITAU,
            dia_do_fechamento: new Date(23/4/2023),
            dia_do_vencimento: new Date(30/4/2023)})
    })

})
