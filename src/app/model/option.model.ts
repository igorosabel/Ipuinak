import { urldecode, urlencode } from '@osumi/tools';
import { OptionInterface } from 'src/app/interfaces/interfaces';

export class Option {
  constructor(
    public id: number | null = null,
    public idPage: number | null = null,
    public optionOrder: number | null = null,
    public content: string | null = null,
    public nextPage: number | null = null
  ) {}

  fromInterface(o: OptionInterface): Option {
    this.id = o.id;
    this.idPage = o.idPage;
    this.optionOrder = o.optionOrder;
    this.content = urldecode(o.content);
    this.nextPage = o.nextPage;

    return this;
  }

  toInterface(): OptionInterface {
    return {
      id: this.id,
      idPage: this.idPage,
      optionOrder: this.optionOrder,
      content: urlencode(this.content),
      nextPage: this.nextPage,
    };
  }
}
