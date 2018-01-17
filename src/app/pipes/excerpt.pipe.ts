import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = value.replace(/\r\n/g, '').replace(/#/g, '');
    let idx = 90;
    while (idx > 0 && value.indexOf(' ', idx) > 100) {
      idx--;
    }
    return value.substring(0, value.indexOf(' ', idx)) + '...';
  }

}
