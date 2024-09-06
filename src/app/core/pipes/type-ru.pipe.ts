import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeRu',
  standalone: true,
})
export class TypeRuPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'movie':
        return 'Фильм';
      case 'tv-series':
        return 'Сериалы';
      case 'cartoon':
        return 'Мультфильм';
      case 'animated-series':
        return 'Аниме-сериал';
      case 'anime':
        return 'Аниме';
    }
    return '';
  }
}
