import { IsNotEmpty } from 'class-validator';

export default class CreatePayableBody {
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

  @IsNotEmpty({
    message: 'Not shoud be empty',
  })
  amount: string;
}
