import { Injectable } from '@nestjs/common';
import { Transaction } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { TransactionRepository } from '../transaction-repository';

@Injectable()
export class PrismaTransactionRepository implements TransactionRepository {
  constructor(private prisma: PrismaService) {}

  async get(): Promise<Transaction[]> {
    return this.prisma.transaction.findMany();
  }

  async create(
    amount: number,
    description: string,
    paymentMethod: string,
    creditCardNumber: number,
    creditCardHolder: string,
    creditCardDate: string,
    creditCardCVV: number,
  ): Promise<void> {
    await this.prisma.transaction.create({
      data: {
        amount,
        description,
        paymentMethod,
        creditCardNumber,
        creditCardHolder,
        creditCardDate,
        creditCardCVV,
      },
    });
  }
}
