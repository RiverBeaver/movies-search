import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormatter',
  standalone: true,
})
export class TimeFormatterPipe implements PipeTransform {
  transform(value: number): string {
    const min = value % 60;
    const hour = Math.trunc(value / 60);
    return `${hour ? hour + ' ч ' : ''} ${min ? min + ' мин' : ''}`;
  }
}
