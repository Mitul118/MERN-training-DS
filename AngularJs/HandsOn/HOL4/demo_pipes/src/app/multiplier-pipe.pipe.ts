import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplierPipe'
})
export class MultiplierPipePipe implements PipeTransform {

  transform(value: number , exponent=1): number {
    return value ** exponent;
  }

}
