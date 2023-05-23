export interface DialogField {
  title: string;
  type: string;
  value: string;
  hint?: string;
}

export interface DialogOptions {
  title: string;
  content: string;
  fields?: DialogField[];
  ok: string;
  cancel?: string;
}

export interface DialogInterface {
  id: number | null;
  idPage: number | null;
  idCharacter: number | null;
  dialogOrder: number | null;
  content: string | null;
}

export interface OptionInterface {
  id: number | null;
  idPage: number | null;
  optionOrder: number | null;
  content: string | null;
  nextPage: number | null;
}

export interface PageInterface {
  id: number | null;
  idTale: number | null;
  pageOrder: number | null;
  hasImage: boolean;
  preloadImage: boolean;
  bgColor: string | null;
  animationIn: number | null;
  animationOut: number | null;
  hasOptions: boolean;
  nextPage: number | null;
  dialogs: DialogInterface[];
  options: OptionInterface[];
}

export interface CharacterInterface {
  id: number | null;
  idTale: number | null;
  name: string | null;
  hasImage: boolean;
  color: string | null;
  data?: string | null;
}

export interface BookmarkInterface {
  id: number | null;
  idTale: number | null;
  idPage: number | null;
  idDialog: number | null;
  comment: string | null;
  createdAt: string | null;
}

export interface TaleInterface {
  id: number | null;
  name: string | null;
  createdAt: string | null;
  pages: PageInterface[];
  characters: CharacterInterface[];
  lastBookmark: BookmarkInterface | null;
}

export interface TalesResult {
  list: TaleInterface[];
}

export interface TaleResult {
  status: string;
  tale: TaleInterface;
}

export interface CharactersResult {
  status: string;
  list: CharacterInterface[];
}

export interface StatusResult {
  status: string;
}

export interface StatusIdResult {
  status: string;
  id: number;
}

export interface AnimationOption {
  id: number;
  name: string;
}
