import { Payable } from '@prisma/client';

export abstract class PayableRepository {
  abstract get(): Promise<Payable[]>;
}
