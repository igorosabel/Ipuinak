import { urldecode, urlencode } from '@osumi/tools';
import { DialogInterface } from 'src/app/interfaces/interfaces';

export class Dialog {
  constructor(
    public id: number | null = null,
    public idCharacter: number | null = null,
    public dialogOrder: number | null = null,
    public content: string | null = null
  ) {}

  fromInterface(d: DialogInterface): Dialog {
    this.id = d.id;
    this.idCharacter = d.idCharacter;
    this.dialogOrder = d.dialogOrder;
    this.content = urldecode(d.content);

    return this;
  }

  toInterface(): DialogInterface {
    return {
      id: this.id,
      idCharacter: this.idCharacter,
      dialogOrder: this.dialogOrder,
      content: urlencode(this.content),
    };
  }
}
