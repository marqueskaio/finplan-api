import { FaturasModel } from "@prisma/client";
import { PostFaturasRepositoryInterface } from "../../interfaces/repositories/faturas/post-faturas-repository-interface";
import { PostFaturaUseCase } from "./post-faturas-usecase"


const faturasModel = (): FaturasModel => {
    return {
        id: 1,
        mes_fatura: "Janeiro",
        dia_do_fechamento: "16/04/2023",
        dia_do_vencimento: "23/04/2023"
    }
}


describe('PostFaturasUsecase', ()=>{

    test('Deve retornar os dados de uma fatura criada corretamente', async()=>{

        class PostFaturaRepositoryStub implements PostFaturasRepositoryInterface {
            save(): Promise<FaturasModel> {
              return Promise.resolve(faturasModel());
            }
          }

        const postFaturasRepositoryStub = new PostFaturaRepositoryStub()
        const sut = new PostFaturaUseCase(postFaturasRepositoryStub)
        const spy = jest.spyOn(postFaturasRepositoryStub, 'save')
        await sut.execute({
            mes_fatura: "Janeiro",
            dia_do_fechamento: "16/04/2023",
            dia_do_vencimento: "23/04/2023"
        })
        expect(spy).toHaveBeenCalledWith({mes_fatura: "Janeiro",
        dia_do_fechamento: "16/04/2023",
        dia_do_vencimento: "23/04/2023"})
    })

})