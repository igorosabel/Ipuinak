import { Injectable } from '@angular/core';
import { CharacterInterface } from '@interfaces/character.interfaces';
import { DialogInterface } from '@interfaces/dialog.interfaces';
import { PageInterface } from '@interfaces/page.interfaces';
import { TaleInterface } from '@interfaces/tale.interfaces';
import Character from '@model/character.model';
import Dialog from '@model/dialog.model';
import Page from '@model/page.model';
import Tale from '@model/tale.model';

@Injectable({
  providedIn: 'root',
})
export default class ClassMapperService {
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
