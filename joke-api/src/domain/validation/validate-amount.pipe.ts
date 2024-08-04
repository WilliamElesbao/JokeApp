import { BadRequestException, PipeTransform } from '@nestjs/common';

export class ValidateAmountPipe implements PipeTransform {
  transform(value: number) {
    if (value < 1 || value > 10) {
      throw new BadRequestException('Amount must be between 1 and 10');
    }
    return value;
  }
}
