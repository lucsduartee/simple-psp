import { Module } from '@nestjs/common';
import { TransactionModule } from './transactions/transaction.module';
import { PayableModule } from './payables/payable.module';

@Module({
  imports: [TransactionModule, PayableModule],
})
export class AppModule {}
