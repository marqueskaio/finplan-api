<<<<<<< HEAD
import { FaturasModel, Bancos } from "@prisma/client";
import { PostFaturasRepositoryInterface } from "../../../interfaces/repositories/post-faturas-repository-interface";
=======
import { Bancos, FaturasModel } from "@prisma/client";
import { PostFaturasRepositoryInterface } from "../../../interfaces/repositories/faturas/post-faturas-repository-interface";
>>>>>>> 9a43f586e296a7c57b66be5d118b8125af8d2fcd
import { PostFaturaUseCase } from "./post-faturas-usecase"


const faturasModel = (): FaturasModel => {
    return {
        id: 1,
        mes_fatura: "Janeiro",
<<<<<<< HEAD
        banco: Bancos.NUBANK,
        dia_do_fechamento: "16/04/2023",
        dia_do_vencimento: "23/04/2023"
=======
        banco: Bancos.ITAU,
        dia_do_fechamento: new Date(23/4/2023),
        dia_do_vencimento: new Date(30/4/2023)
>>>>>>> 9a43f586e296a7c57b66be5d118b8125af8d2fcd
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
<<<<<<< HEAD
            banco: Bancos.NUBANK,
            dia_do_fechamento: "16/04/2023",
            dia_do_vencimento: "23/04/2023"
        })
        expect(spy).toHaveBeenCalledWith({
            mes_fatura: "Janeiro",
            banco: Bancos.NUBANK,
            dia_do_fechamento: "16/04/2023",
            dia_do_vencimento: "23/04/2023"})
=======
            banco: Bancos.ITAU,
            dia_do_fechamento: new Date(23/4/2023),
            dia_do_vencimento: new Date(30/4/2023)
        })
        expect(spy).toHaveBeenCalledWith({
            mes_fatura: "Janeiro",
            banco: Bancos.ITAU,
            dia_do_fechamento: new Date(23/4/2023),
            dia_do_vencimento: new Date(30/4/2023)})
>>>>>>> 9a43f586e296a7c57b66be5d118b8125af8d2fcd
    })

})
