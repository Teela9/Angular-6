import { stringify } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCasing',
})
export class TitleCasingPipe implements PipeTransform {
  transform(value: string, args?: any): any {
    let articles = [
      'above',
      'across',
      'against',
      'along',
      'among',
      'around',
      'at',
      'before',
      'behind',
      'below',
      'beneath',
      'beside',
      'between',
      'by',
      'down',
      'from',
      'in',
      'into',
      'near',
      'of',
      'off',
      'on',
      'to',
      'toward',
      'under',
      'upon',
      'with',
      'within',
      'the',
      'a',
      'an',
      'is',
      'was',
      'when'
    ];

    let casedStr;
    let arr = value.split(' ');
    arr[0] = arr[0].toUpperCase();
    for (let index = 0; index < arr.length; index++) {
      arr[index] = arr[index].toLowerCase();
      if (!articles.includes(arr[index])) {
        arr[index] = arr[index].substr(0,1).toUpperCase().concat(arr[index].substr(1));
      }
    }

    return arr.map(item => item).join(' ');
  }
}
