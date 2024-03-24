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

export interface AnimationOption {
  id: number;
  name: string;
}
