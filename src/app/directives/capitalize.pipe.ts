import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    let first = value.substr(0,1).toUpperCase();
      return first + value.substr(1);

  }

}
