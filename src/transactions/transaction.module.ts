import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaTransactionRepository } from 'src/repositories/prisma/prisma-transaction-repository';
import { TransactionRepository } from 'src/repositories/transaction-repository';
import { TransactionController } from './transaction.controller';

@Module({
  controllers: [TransactionController],
  providers: [
    PrismaService,
    {
      provide: TransactionRepository,
      useClass: PrismaTransactionRepository,
    },
  ],
})
export class TransactionModule {}
