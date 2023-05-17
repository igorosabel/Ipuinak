export interface DialogInterface {
  id: number | null;
  idCharacter: number | null;
  dialogOrder: number | null;
  content: string | null;
}

export interface PageInterface {
  id: number;
  pageOrder: number;
  hasImage: boolean;
  preloadImage: boolean;
  bgColor: string;
  animationIn: number;
  animationOut: number;
  hasOptions: boolean;
  nextPage: number;
  dialogs: DialogInterface[];
}

export interface CharacterInterface {
  id: number;
  name: string;
  hasImage: boolean;
  color: string;
}

export interface TaleInterface {
  id: number;
  name: string;
  createdAt: string;
  pages: PageInterface[];
  characters: CharacterInterface[];
}

export interface TalesResult {
  list: TaleInterface[];
}
