import { Module } from '@nestjs/common';
import { TransactionModule } from './transactions/transaction.module';

@Module({
  imports: [TransactionModule],
})
export class AppModule {}
