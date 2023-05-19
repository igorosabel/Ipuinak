import { Injectable } from '@angular/core';
import {
  CharacterInterface,
  DialogInterface,
  PageInterface,
  TaleInterface,
} from 'src/app/interfaces/interfaces';
import { Character } from 'src/app/model/character.model';
import { Dialog } from 'src/app/model/dialog.model';
import { Page } from 'src/app/model/page.model';
import { Tale } from 'src/app/model/tale.model';

@Injectable({
  providedIn: 'root',
})
export class ClassMapperService {
  getDialog(d: DialogInterface): Dialog {
    return new Dialog().fromInterface(d);
  }

  getDialogs(ds: DialogInterface[]): Dialog[] {
    return ds.map((d: DialogInterface): Dialog => {
      return this.getDialog(d);
    });
  }

  getPage(p: PageInterface): Page {
    return new Page().fromInterface(p);
  }

  getPages(ps: PageInterface[]): Page[] {
    return ps.map((p: PageInterface): Page => {
      return this.getPage(p);
    });
  }

  getCharacter(c: CharacterInterface): Character {
    return new Character().fromInterface(c);
  }

  getCharacters(cs: CharacterInterface[]): Character[] {
    return cs.map((c: CharacterInterface): Character => {
      return this.getCharacter(c);
    });
  }

  getTale(t: TaleInterface): Tale {
    return new Tale().fromInterface(t);
  }

  getTales(ts: TaleInterface[]): Tale[] {
    return ts.map((t: TaleInterface): Tale => {
      return this.getTale(t);
    });
  }
}
