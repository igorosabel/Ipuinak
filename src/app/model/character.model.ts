import { urldecode, urlencode } from '@osumi/tools';
import { CharacterInterface } from 'src/app/interfaces/interfaces';

export class Character {
  data: string | null = null;

  constructor(
    public id: number | null = null,
    public idTale: number | null = null,
    public name: string | null = 'Nuevo personaje',
    public hasImage: boolean = false,
    public color: string | null = null
  ) {}

  fromInterface(c: CharacterInterface): Character {
    this.id = c.id;
    this.idTale = c.idTale;
    this.name = urldecode(c.name);
    this.hasImage = c.hasImage;
    this.color = c.color;

    return this;
  }

  toInterface(): CharacterInterface {
    return {
      id: this.id,
      idTale: this.idTale,
      name: urlencode(this.name),
      hasImage: this.hasImage,
      color: this.color,
      data: this.data,
    };
  }
}
