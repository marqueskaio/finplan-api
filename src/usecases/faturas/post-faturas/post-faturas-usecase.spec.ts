import { FaturasModel, Bancos } from "@prisma/client";
import { PostFaturasRepositoryInterface } from "../../../interfaces/repositories/post-faturas-repository-interface";
import { PostFaturaUseCase } from "./post-faturas-usecase"


const faturasModel = (): FaturasModel => {
    return {
        id: 1,
        mes_fatura: "Janeiro",
        banco: Bancos.NUBANK,
        dia_do_fechamento: "16/04/2023",
        dia_do_vencimento: "23/04/2023"
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
            banco: Bancos.NUBANK,
            dia_do_fechamento: "16/04/2023",
            dia_do_vencimento: "23/04/2023"
        })
        expect(spy).toHaveBeenCalledWith({
            mes_fatura: "Janeiro",
            banco: Bancos.NUBANK,
            dia_do_fechamento: "16/04/2023",
            dia_do_vencimento: "23/04/2023"})
    })

})
