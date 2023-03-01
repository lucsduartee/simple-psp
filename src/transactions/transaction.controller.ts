import { Body, Controller, Get, Post } from '@nestjs/common';
import { Transaction } from '@prisma/client';
import CreateTransactionBody from './dto/create-transaction.dto';
import { TransactionRepository } from 'src/repositories/transaction-repository';

@Controller('api')
export class TransactionController {
  constructor(private transactionRepository: TransactionRepository) {}

  @Post('transactions')
  async createTransaction(@Body() body: CreateTransactionBody) {
    const {
      amount,
      description,
      paymentMethod,
      creditCardCVV,
      creditCardDate,
      creditCardHolder,
      creditCardNumber,
    } = body;

    return this.transactionRepository.create(
      amount,
      description,
      paymentMethod,
      creditCardCVV,
      creditCardDate,
      creditCardHolder,
      creditCardNumber,
    );
  }

  @Get('transactions')
  async getTransaction(): Promise<Transaction[]> {
    return this.transactionRepository.get();
  }
}
