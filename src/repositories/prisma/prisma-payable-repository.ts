import { Injectable } from '@nestjs/common';
import { Payable } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { PayableRepository } from '../payable-repository';

@Injectable()
export class PrismaPayableRepository implements PayableRepository {
  constructor(private prisma: PrismaService) {}

  async get(): Promise<Payable[]> {
    return this.prisma.payable.findMany();
  }
}
