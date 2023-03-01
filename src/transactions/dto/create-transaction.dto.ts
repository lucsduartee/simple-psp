import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class CreateTransactionBody {
  @ApiProperty({ example: 1, description: 'The age of the Cat' })
  @IsNotEmpty({
    message: 'Not should be empty',
  })
  amount: number;

  @IsNotEmpty({
    message: 'Not should be empty',
  })
  description: string;

  @IsNotEmpty({
    message: 'Not should be empty',
  })
  paymentMethod: string;

  @IsNotEmpty({
    message: 'Not should be empty',
  })
  creditCardNumber: number;

  @IsNotEmpty({
    message: 'Not should be empty',
  })
  creditCardHolder: string;

  @IsNotEmpty({
    message: 'Not should be empty',
  })
  creditCardDate: string;

  @IsNotEmpty({
    message: 'Not should be empty',
  })
  creditCardCVV: number;
}
