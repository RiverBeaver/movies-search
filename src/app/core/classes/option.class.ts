export class OptionElem {
  value?: string;
  text?: string;
  title?: string;

  constructor(value: string, text: string, title = '') {
    this.value = value;
    this.text = text;
    this.title = title;
  }
}
