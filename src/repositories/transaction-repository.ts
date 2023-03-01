import { Transaction } from '@prisma/client';

export abstract class TransactionRepository {
  abstract get(): Promise<Transaction[]>;

  abstract create(
    amount: number,
    description: string,
    paymentMethod: string,
    creditCardNumber: number,
    creditCardHolder: string,
    creditCardDate: string,
    creditCardCVV: number,
  ): Promise<void>;
}
