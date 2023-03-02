import { Injectable } from '@nestjs/common';
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

    return await this.transactionRepository.create(transaction);
  }

  async getTransactions(): Promise<Transaction[]> {
    return await this.transactionRepository.get();
  }

  async getTransactionById(id: string): Promise<Transaction> {
    return await this.transactionRepository.getById(Number(id));
  }

  async getTransactionBalanceStatus(id: string) {
    const { payables } = await this.transactionRepository.getPayablesInfo(
      Number(id),
    );

    return payables.reduce(
      (balance, { amount, status }) => {
        switch (status) {
          case 'paid':
            return {
              ...balance,
              avaliable: (balance.avaliable += amount),
            };
          case 'waiting_funds':
            return {
              ...balance,
              waiting_funds: (balance.waiting_funds += amount),
            };
          default:
            break;
        }
      },
      {
        avaliable: 0,
        waiting_funds: 0,
      },
    );
  }

  private maskCreditCard(creditCardNumber: string): string {
    return creditCardNumber.slice(-4);
  }
}
