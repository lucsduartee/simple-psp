import { Injectable, Logger } from '@nestjs/common';
import { Transaction } from '@prisma/client';
import { TransactionRepository } from 'src/repositories/transaction-repository';
import CreateTransactionBody from './dto/create-transaction.dto';

@Injectable()
export class TransactionService {
  constructor(private transactionRepository: TransactionRepository) {}

  async createTransaction(
    transactionBody: CreateTransactionBody,
  ): Promise<Transaction> {
    const { creditCardNumber: rawCreditCardNumber } = transactionBody;
    const transaction: CreateTransactionBody = {
      ...transactionBody,
      creditCardNumber: this.maskCreditCard(rawCreditCardNumber),
    };

    const test = await this.transactionRepository.create(transaction);

    Logger.log(test);
    return test;
  }

  async getTransactions(): Promise<Transaction[]> {
    return await this.transactionRepository.get();
  }

  private maskCreditCard(creditCardNumber: string): string {
    return creditCardNumber.slice(-4);
  }
}
