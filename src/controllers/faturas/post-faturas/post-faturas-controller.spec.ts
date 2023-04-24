import { Bancos, FaturasModel } from "@prisma/client"
import {ok} from "../../../helpers/http/http-helper";
import { UsecaseInterface } from "interfaces/usecases/usecase-interface"
import { PostFaturasController } from "./post-faturas-controller"

describe('PostFaturasController', ()=>{

    test('Should return a fatura on success', async ()=>{
        class PostFaturasUseCaseStub implements UsecaseInterface{
            execute (): Promise<FaturasModel> {
                return Promise.resolve({
                    id: 1,
                    mes_fatura: "Janeiro",
                    banco: Bancos.ITAU,
                    dia_do_fechamento: new Date(23/4/2023),
                    dia_do_vencimento: new Date(30/4/2023)
                })
            }

        }
        const postFaturasUseCaseStub = new PostFaturasUseCaseStub()
        const sut = new PostFaturasController(postFaturasUseCaseStub)
        const result = await sut.handle({body:{
            id: 1,
            mes_fatura: "Janeiro",
            banco: Bancos.ITAU,
            dia_do_fechamento: new Date(23/4/2023),
            dia_do_vencimento: new Date(30/4/2023)
        }})
        expect(result).toEqual(ok({
            id: 1,
            mes_fatura: "Janeiro",
            banco: Bancos.ITAU,
            dia_do_fechamento: new Date(23/4/2023),
            dia_do_vencimento: new Date(30/4/2023)
        }))
    })
})