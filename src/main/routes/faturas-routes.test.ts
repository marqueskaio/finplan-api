import { Bancos } from "@prisma/client"
import app from "../config/app"
import request from "supertest"

describe('Faturas Router', ()=>{
    test('Should return 200', async ()=>{
         await request(app).post('/api/faturas')
        .send({mes_fatura: "Janeiro", banco: Bancos.ITAU, dia_do_fechamento: new Date(23 / 4 / 2023),
         dia_do_vencimento: new Date(30 / 4 / 2023)}).expect(200)
    })
})