const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

describe('Teste de Exemplo', () => {
  beforeAll(async () => {
    await prisma.$connect();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  test('Caso de teste de exemplo', async () => {
    const fatura =  await prisma.FaturasModel.create({
      data: {
        mes_fatura: 'Janeiro',
        dia_do_fechamento: '16/04/2023',
        dia_do_vencimento: '23/04/2023',
      },
      
    });
  
    expect(fatura.mes_fatura).toBe('Janeiro');
  });
});

