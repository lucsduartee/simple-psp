import { Injectable } from '@nestjs/common';
import { Transaction } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import CreateTransactionBody from 'src/domains/transactions/dto/create-transaction.dto';
import { PayablesInfo, TransactionRepository } from '../transaction-repository';
import PayableService from 'src/domains/payables/payable.service';

@Injectable()
export class PrismaTransactionRepository implements TransactionRepository {
  constructor(private prisma: PrismaService) {}

  async getPayablesInfo(id: number): Promise<PayablesInfo> {
    return await this.prisma.transaction.findUnique({
      where: { id },
      select: {
        payables: {
          select: {
            amount: true,
            status: true,
          },
        },
      },
    });
  }

  async getById(id: number): Promise<Transaction> {
    return await this.prisma.transaction.findUnique({
      where: { id },
      include: {
        payables: true,
      },
    });
  }

  async get(): Promise<Transaction[]> {
    return this.prisma.transaction.findMany({ include: { payables: true } });
  }

  async create(transactionBody: CreateTransactionBody): Promise<Transaction> {
    return await this.prisma.transaction.create({
      data: {
        ...transactionBody,
        payables: {
          create: PayableService.createPayable(transactionBody),
        },
      },
      include: {
        payables: true,
      },
    });
  }
}
