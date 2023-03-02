import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TransactionModule } from './domains/transactions/transaction.module';
import { PayableModule } from './domains/payables/payable.module';

@Module({
  imports: [ConfigModule.forRoot(), TransactionModule, PayableModule],
})
export class AppModule {}
