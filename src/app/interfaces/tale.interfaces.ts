import { CharacterInterface } from '@interfaces/character.interfaces';
import { PageInterface } from '@interfaces/page.interfaces';

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
