import { Transaction } from '@prisma/client';
import CreateTransactionBody from 'src/domains/transactions/dto/create-transaction.dto';

export abstract class TransactionRepository {
  abstract get(): Promise<Transaction[]>;

  abstract create(transactionBody: CreateTransactionBody): Promise<Transaction>;
}
