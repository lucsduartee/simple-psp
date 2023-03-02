import { Body, Controller, Get, Post } from '@nestjs/common';
import { Transaction } from '@prisma/client';
import CreateTransactionBody from './dto/create-transaction.dto';
import { TransactionService } from './transaction.service';

@Controller('api')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Post('transactions')
  async createTransaction(@Body() body: CreateTransactionBody) {
    return this.transactionService.createTransaction(body);
  }

  @Get('transactions')
  async getTransaction(): Promise<Transaction[]> {
    return this.transactionService.getTransactions();
  }
}
