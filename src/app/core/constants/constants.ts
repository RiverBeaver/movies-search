import { OptionElem } from '../classes/option.class';

export const KEY = 'RFQ6H7W-W32MAJ9-H7PTAKQ-FTJR637';

export const UTF8: Record<string, any> = {
  '~': '%7E',
  '`': '60%',
  "'": '27%',
  '"': '22%',
  '@': '40%',
  // '?': '%3F',
  '!': '21%',
  '#': '23%',
  '№': '%E2%84%96',
  $: '24%',
  '%': '25%',
  '^': '%5E',
  // '&': '26%',
  '+': '%2B',
  '*': '%2A',
  ':': '%3A',
  ',': '%2C',
  '(': '28%',
  ')': '29%',
  '{': '%7B',
  '}': '%7D',
  '[': '%5B',
  ']': '%5D',
  '<': '%3C',
  '>': '%3E',
  '/': '%2F',
  ' ': '%20',
  А: '%D0%90',
  а: '%D0%B0',
  Б: '%D0%91',
  б: '%D0%B1',
  В: '%D0%92',
  в: '%D0%B2',
  Г: '%D0%93',
  г: '%D0%B3',
  Д: '%D0%94',
  д: '%D0%B4',
  Е: '%D0%95',
  е: '%D0%B5',
  Ё: '%D0%81',
  ё: '%D1%91',
  Ж: '%D0%96',
  ж: '%D0%B6',
  З: '%D0%97',
  з: '%D0%B7',
  И: '%D0%98',
  и: '%D0%B8',
  Й: '%D0%99',
  й: '%D0%B9',
  К: '%D0%9A',
  к: '%D0%BA',
  Л: '%D0%9B',
  л: '%D0%BB',
  М: '%D0%9C',
  м: '%D0%BC',
  Н: '%D0%9D',
  н: '%D0%BD',
  О: '%D0%9E',
  о: '%D0%BE',
  П: '%D0%9F',
  п: '%D0%BF',
  Р: '%D0%A0',
  р: '%D1%80',
  С: '%D0%A1',
  с: '%D1%81',
  Т: '%D0%A2',
  т: '%D1%82',
  У: '%D0%A3',
  у: '%D1%83',
  Ф: '%D0%A4',
  ф: '%D1%84',
  Х: '%D0%A5',
  х: '%D1%85',
  Ц: '%D0%A6',
  ц: '%D1%86',
  Ч: '%D0%A7',
  ч: '%D1%87',
  Ш: '%D0%A8',
  ш: '%D1%88',
  Щ: '%D0%A9',
  щ: '%D1%89',
  Ъ: '%D0%AA',
  ъ: '%D1%8A',
  Ы: '%D0%AB',
  ы: '%D1%8B',
  Ь: '%D0%AC',
  ь: '%D1%8C',
  Э: '%D0%AD',
  э: '%D1%8D',
  Ю: '%D0%AE',
  ю: '%D1%8E',
  Я: '%D0%AF',
  я: '%D1%8F',
};

let listKeysUTF8 = '';
for (let elem in UTF8) {
  if (elem === '[' || elem === ']' || elem === '\\' || elem === '/') {
    listKeysUTF8 += '\\' + elem;
  } else {
    listKeysUTF8 += elem;
  }
}
listKeysUTF8 = '[' + listKeysUTF8 + ']';
export const REGEX_UTF8 = new RegExp(listKeysUTF8, 'g');

export const YEARS_OPTIONS = [
  new OptionElem('2024', '2024 год'),
  new OptionElem('2023', '2023 год'),
  new OptionElem('2022', '2022 год'),
  new OptionElem('2021', '2021 год'),
  new OptionElem('2020', '2020 год'),
  new OptionElem('2019', '2019 год'),
  new OptionElem('2018', '2018 год'),
  new OptionElem('2017', '2017 год'),
  new OptionElem('2016', '2016 год'),
  new OptionElem('2020-2024', '2020-2024'),
  new OptionElem('2015-2020', '2015-2020'),
  new OptionElem('2010-2015', '2010-2015'),
  new OptionElem('2000-2010', '2000-2010'),
  new OptionElem('1990-2000', '1990-2000'),
  new OptionElem('1980-1990', '1980-1990'),
  new OptionElem('1874-1980', 'до 1980'),
];

export const RATING_OPTIONS = [
  new OptionElem('9-10', 'Больше 9'),
  new OptionElem('8-10', 'Больше 8'),
  new OptionElem('7-10', 'Больше 7'),
  new OptionElem('6-10', 'Больше 6'),
  new OptionElem('5-10', 'Больше 5'),
];

export const MPAA_OPTIONS = [
  new OptionElem('g', 'G', 'Фильм демонстрируется без ограничений'),
  new OptionElem('pg', 'PG', 'Детям рекомендуется смотреть фильм с родителями'),
  new OptionElem('pg13', 'PG-13', 'Просмотр не желателен детям до 13 лет'),
  new OptionElem(
    'r',
    'R',
    'Лица, не достигшие 17-летнего возраста, допускаются на фильм только в сопровождении одного из родителей, либо законного представителя'
  ),
  new OptionElem(
    'nc17',
    'NC-17',
    'Лица 17-летнего возраста и младше на фильм не допускаются'
  ),
];
