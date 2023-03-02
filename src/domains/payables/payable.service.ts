import { Injectable } from '@nestjs/common';
import CreateTransactionBody from 'src/domains/transactions/dto/create-transaction.dto';

@Injectable()
class PayableService {
  createPayable({ paymentMethod, amount }: CreateTransactionBody) {
    return {
      dueDate: this.payableDueData(paymentMethod),
      fee: this.payableFee(paymentMethod, amount),
      status: this.payableStatus(paymentMethod),
      amount: amount - this.payableFee(paymentMethod, amount),
    };
  }

  private payableStatus(paymentMethod: string): string {
    const status = {
      credit_card: 'waiting_funds',
      debit_card: 'paid',
    };

    return status[paymentMethod];
  }

  private payableFee(paymentMethod: string, amount: number): number {
    const fee = {
      credit_card: amount * 0.03,
      debit_card: amount * 0.05,
    };

    return fee[paymentMethod];
  }

  private payableDueData(paymentMethod: string): string {
    const dueDate = {
      credit_card: (new Date().getDate() + 30).toString(),
      debit_card: new Date().toString(),
    };

    return dueDate[paymentMethod];
  }
}

export default new PayableService();
