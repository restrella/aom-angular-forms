import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential',
})
export class ExponentialPipe implements PipeTransform {
  transform(value: number, exponent: number = 1): unknown {
    return Math.pow(value, exponent);
  }
}
