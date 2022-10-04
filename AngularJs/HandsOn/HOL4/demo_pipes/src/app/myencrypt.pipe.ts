import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myencrypt'
})
export class MyencryptPipe implements PipeTransform {

  transform(value: string){
    const noVowels = value.replace(/[aeiou]/gi, '13579');
    return noVowels;
  }
}
