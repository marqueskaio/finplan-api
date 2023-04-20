import { UsecaseInterface } from "interfaces/usecases/usecase-interface"
import { FaturasRepository } from "./faturas-repository"

describe('FaturasRepository', ()=>{
    test('should return fatura on success', async ()=>{
        const sut = new FaturasRepository()
        const result = await sut.create({
            mes_fatura: "Janeiro", 
            banco: 'ITAU', 
            dia_do_fechamento: '21/4/2023', 
            dia_do_vencimento: '20/4/2023'})
        expect(result).toEqual({
            mes_fatura: "Janeiro", 
            banco: 'ITAU', 
            dia_do_fechamento: '21/4/2023', 
            dia_do_vencimento: '20/4/2023'})
    })
})