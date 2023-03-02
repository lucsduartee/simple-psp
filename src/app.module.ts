import { Module } from '@nestjs/common';
import { TransactionModule } from './domains/transactions/transaction.module';
import { PayableModule } from './domains/payables/payable.module';

@Module({
  imports: [TransactionModule, PayableModule],
})
export class AppModule {}
