import { environment } from '@env/environment';
import { CharacterInterface } from '@interfaces/character.interfaces';
import { urldecode, urlencode } from '@osumi/tools';

export default class Character {
  data: string | null = null;

  constructor(
    public id: number | null = null,
    public idTale: number | null = null,
    public name: string | null = 'Nuevo personaje',
    public hasImage: boolean = false,
    public color: string | null = null
  ) {}

  get colorHash(): string {
    if (this.color === null) {
      return '#fff';
    }
    if (this.color.indexOf('#') === -1) {
      return '#' + this.color;
    }
    return this.color;
  }

  get characterImage(): string {
    return environment.imagesUrl + 'characters/' + this.id + '.webp';
  }

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
