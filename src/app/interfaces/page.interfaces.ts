import { DialogInterface } from '@interfaces/dialog.interfaces';

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
