import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comman'
})
export class CommanPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
