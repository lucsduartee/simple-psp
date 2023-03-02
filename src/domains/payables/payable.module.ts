import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaPayableRepository } from 'src/repositories/prisma/prisma-payable-repository';
import { PayableRepository } from 'src/repositories/payable-repository';
import { PayableController } from './payable.controller';

@Module({
  controllers: [PayableController],
  providers: [
    PrismaService,
    {
      provide: PayableRepository,
      useClass: PrismaPayableRepository,
    },
  ],
})
export class PayableModule {}
