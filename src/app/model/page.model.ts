import {
  DialogInterface,
  OptionInterface,
  PageInterface,
} from 'src/app/interfaces/interfaces';
import { Dialog } from 'src/app/model/dialog.model';
import { Option } from 'src/app/model/option.model';

export class Page {
  constructor(
    public id: number | null = null,
    public idTale: number | null = null,
    public pageOrder: number | null = null,
    public hasImage: boolean = false,
    public preloadImage: boolean = false,
    public bgColor: string | null = null,
    public animationIn: number | null = null,
    public animationOut: number | null = null,
    public hasOptions: boolean = false,
    public nextPage: number | null = null,
    public dialogs: Dialog[] = [],
    public options: Option[] = []
  ) {}

  get bgColorHash(): string {
    if (this.bgColor === null) {
      return '#fff';
    }
    if (this.bgColor.indexOf('#') === -1) {
      return '#' + this.bgColor;
    }
    return this.bgColor;
  }

  fromInterface(p: PageInterface): Page {
    this.id = p.id;
    this.idTale = p.idTale;
    this.pageOrder = p.pageOrder;
    this.hasImage = p.hasImage;
    this.preloadImage = p.preloadImage;
    this.bgColor = p.bgColor;
    this.animationIn = p.animationIn;
    this.animationOut = p.animationOut;
    this.hasOptions = p.hasOptions;
    this.nextPage = p.nextPage;
    this.dialogs = p.dialogs.map((d: DialogInterface): Dialog => {
      return new Dialog().fromInterface(d);
    });
    this.options = p.options.map((o: OptionInterface): Option => {
      return new Option().fromInterface(o);
    });

    return this;
  }

  toInterface(): PageInterface {
    return {
      id: this.id,
      idTale: this.idTale,
      pageOrder: this.pageOrder,
      hasImage: this.hasImage,
      preloadImage: this.preloadImage,
      bgColor: this.bgColor,
      animationIn: this.animationIn,
      animationOut: this.animationOut,
      hasOptions: this.hasOptions,
      nextPage: this.nextPage,
      dialogs: this.dialogs.map((d: Dialog): DialogInterface => {
        return d.toInterface();
      }),
      options: this.options.map((o: Option): OptionInterface => {
        return o.toInterface();
      }),
    };
  }
}
