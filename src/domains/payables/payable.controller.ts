import { Controller, Get } from '@nestjs/common';
import { Payable } from '@prisma/client';
import { PayableRepository } from 'src/repositories/payable-repository';

@Controller('api')
export class PayableController {
  constructor(private payableRepository: PayableRepository) {}

  @Get('payables')
  async getPayable(): Promise<Payable[]> {
    return this.payableRepository.get();
  }
}
