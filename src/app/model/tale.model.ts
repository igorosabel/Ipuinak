import { CharacterInterface } from '@interfaces/character.interfaces';
import { PageInterface } from '@interfaces/page.interfaces';
import { TaleInterface } from '@interfaces/tale.interfaces';
import Bookmark from '@model/bookmark.model';
import Character from '@model/character.model';
import Page from '@model/page.model';
import { urldecode, urlencode } from '@osumi/tools';

export default class Tale {
  constructor(
    public id: number | null = null,
    public name: string | null = null,
    public createdAt: string | null = null,
    public pages: Page[] = [],
    public characters: Character[] = [],
    public lastBookmark: Bookmark | null = null
  ) {}

  fromInterface(t: TaleInterface): Tale {
    this.id = t.id;
    this.name = urldecode(t.name);
    this.createdAt = t.createdAt;
    this.pages = t.pages.map((p: PageInterface): Page => {
      return new Page().fromInterface(p);
    });
    this.characters = t.characters.map((c: CharacterInterface): Character => {
      return new Character().fromInterface(c);
    });
    if (t.lastBookmark !== null) {
      this.lastBookmark = new Bookmark().fromInterface(t.lastBookmark);
    }

    return this;
  }

  toInterface(): TaleInterface {
    return {
      id: this.id,
      name: urlencode(this.name),
      createdAt: this.createdAt,
      pages: this.pages.map((p: Page): PageInterface => {
        return p.toInterface();
      }),
      characters: this.characters.map((c: Character): CharacterInterface => {
        return c.toInterface();
      }),
      lastBookmark:
        this.lastBookmark !== null ? this.lastBookmark.toInterface() : null,
    };
  }
}
