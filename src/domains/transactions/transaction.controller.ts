import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get('transactions/:id')
  async getTransactionById(@Param('id') id: string): Promise<Transaction> {
    return this.transactionService.getTransactionById(id);
  }

  @Get('transactions/:id/balance-status')
  async getTransactionBalanceStatus(@Param('id') id: string) {
    return await this.transactionService.getTransactionBalanceStatus(id);
  }
}
