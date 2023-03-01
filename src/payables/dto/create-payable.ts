import { IsNotEmpty } from 'class-validator';

export default class CreateTransactionBody {
  @IsNotEmpty({
    message: 'Not should be empty',
  })
  status: string;

  @IsNotEmpty({
    message: 'Not should be empty',
  })
  fee: number;

  @IsNotEmpty({
    message: 'Not should be empty',
  })
  dueDate: string;
}
