import { Transaction } from '@prisma/client';
import CreateTransactionBody from 'src/domains/transactions/dto/create-transaction.dto';

export interface PayableInfo {
  amount: number;
  status: string;
}

export interface PayablesInfo {
  payables: PayableInfo[];
}

export abstract class TransactionRepository {
  abstract get(): Promise<Transaction[]>;

  abstract create(transactionBody: CreateTransactionBody): Promise<Transaction>;

  abstract getById(id: number): Promise<Transaction>;

  abstract getPayablesInfo(id: number): Promise<PayablesInfo>;
}
