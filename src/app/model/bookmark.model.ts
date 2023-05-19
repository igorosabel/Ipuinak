import { urldecode, urlencode } from '@osumi/tools';
import { BookmarkInterface } from 'src/app/interfaces/interfaces';

export class Bookmark {
  constructor(
    public id: number | null = null,
    public idPage: number | null = null,
    public idDialog: number | null = null,
    public comment: string | null = null,
    public createdAt: string | null = null
  ) {}

  fromInterface(b: BookmarkInterface): Bookmark {
    this.id = b.id;
    this.idPage = b.idPage;
    this.idDialog = b.idDialog;
    this.comment = urldecode(b.comment);
    this.createdAt = b.createdAt;

    return this;
  }

  toInterface(): BookmarkInterface {
    return {
      id: this.id,
      idPage: this.idPage,
      idDialog: this.idDialog,
      comment: urlencode(this.comment),
      createdAt: this.createdAt,
    };
  }
}
