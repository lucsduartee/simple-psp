import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const transaction = await prisma.transaction.create({
    data: {
      amount: 660.66,
      description: 'Transaction 1',
      paymentMethod: 'debit_card',
      creditCardNumber: 8036,
      creditCardHolder: 'Joseph da Silva',
      creditCardDate: '12/2040',
      creditCardCVV: 123,
    },
  });

  console.log({ transaction });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
