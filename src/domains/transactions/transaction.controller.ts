import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { Transaction } from '@prisma/client';
import CreateTransactionBody from './dto/create-transaction.dto';
import { TransactionService } from './transaction.service';

@ApiTags('Transactions')
@Controller('api')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
  })
  @Post('transactions')
  async createTransaction(@Body() body: CreateTransactionBody) {
    return this.transactionService.createTransaction(body);
  }

  @ApiOkResponse({ description: 'Ok' })
  @Get('transactions')
  async getTransaction(): Promise<Transaction[]> {
    return this.transactionService.getTransactions();
  }

  @ApiOkResponse({ description: 'Ok' })
  @Get('transactions/:id')
  async getTransactionById(@Param('id') id: string): Promise<Transaction> {
    return this.transactionService.getTransactionById(id);
  }

  @ApiOkResponse({ description: 'Ok' })
  @Get('transactions/:id/balance-status')
  async getTransactionBalanceStatus(@Param('id') id: string) {
    return await this.transactionService.getTransactionBalanceStatus(id);
  }
}
