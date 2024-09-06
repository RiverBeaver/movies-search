import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'releaseYearsFormatter',
  standalone: true,
})
export class ReleaseYearsFormatterPipe implements PipeTransform {
  transform(value: { start: number | null; end: number | null }): string {
    if ((!value.start && !value.end) || !value.start) return '';

    if (value.start === value.end) return value.start + '';

    return `${value.start}-${value.end ? value.end : '...'}`;
  }
}
