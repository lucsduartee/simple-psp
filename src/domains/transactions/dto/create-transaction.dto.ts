import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum PaymentMethod {
  debit_card = 'debit_card',
  credit_card = 'debit_card',
}

export default class CreateTransactionBody {
  @ApiProperty()
  @IsNotEmpty({
    message: 'Not should be empty',
  })
  amount: number;

  @ApiProperty()
  @IsNotEmpty({
    message: 'Not should be empty',
  })
  description: string;

  @ApiProperty({ enum: ['debit_card', 'credit_card'] })
  @IsNotEmpty({
    message: 'Not should be empty',
  })
  paymentMethod: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'Not should be empty',
  })
  cardNumber: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'Not should be empty',
  })
  cardHolder: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'Not should be empty',
  })
  cardDate: string;

  @ApiProperty()
  @IsNotEmpty({
    message: 'Not should be empty',
  })
  cardCVV: number;
}
