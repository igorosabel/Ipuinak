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
  idCharacter: number | null;
  dialogOrder: number | null;
  content: string | null;
}

export interface PageInterface {
  id: number | null;
  pageOrder: number | null;
  hasImage: boolean;
  preloadImage: boolean;
  bgColor: string | null;
  animationIn: number | null;
  animationOut: number | null;
  hasOptions: boolean;
  nextPage: number | null;
  dialogs: DialogInterface[];
}

export interface CharacterInterface {
  id: number | null;
  name: string | null;
  hasImage: boolean;
  color: string | null;
}

export interface BookmarkInterface {
  id: number | null;
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
