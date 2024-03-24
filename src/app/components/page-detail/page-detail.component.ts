import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton, MatIconButton } from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import {
  MatFormField,
  MatLabel,
  MatPrefix,
} from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { AnimationOption } from '@app/interfaces/dialog.interfaces';
import { Dialog } from '@model/dialog.model';
import { Page } from '@model/page.model';
import { Tale } from '@model/tale.model';

@Component({
  standalone: true,
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.scss'],
  imports: [
    NgClass,
    NgStyle,
    FormsModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    MatIconButton,
    MatButton,
    MatIcon,
    MatTabGroup,
    MatTab,
    MatFormField,
    MatLabel,
    MatInput,
    MatPrefix,
    MatSelect,
    MatOption,
    MatSlideToggleModule,
  ],
})
export class PageDetailComponent {
  show: boolean = false;
  tale: Tale = new Tale();
  page: Page = new Page();
  animationOptionsIn: AnimationOption[] = [
    { id: 0, name: 'Sin animación' },
    { id: 1, name: 'Deslizar (horizontal)' },
    { id: 2, name: 'Deslizar (vertical)' },
    { id: 3, name: 'Aparecer' },
  ];
  animationOptionsOut: AnimationOption[] = [
    { id: 0, name: 'Sin animación' },
    { id: 1, name: 'Deslizar (horizontal)' },
    { id: 2, name: 'Deslizar (vertical)' },
    { id: 3, name: 'Desaparecer' },
  ];
  image: string = '';
  pageList: number[] = [];

  openDetail(page: Page, tale: Tale): void {
    this.show = true;
    this.tale = tale;
    this.page = page;
    this.pageList = [];

    for (const p of this.tale.pages) {
      if (p.pageOrder !== this.page.pageOrder) {
        if (p.pageOrder !== null) {
          this.pageList.push(p.pageOrder);
        }
      }
    }
  }

  close(): void {
    this.show = false;
  }

  addImage(): void {
    const imageFile: HTMLElement | null = document.getElementById('image-file');
    if (imageFile !== null) {
      imageFile.click();
    }
  }

  onImageChange(ev: Event): void {
    const reader: FileReader = new FileReader();
    const files: FileList | null = (<HTMLInputElement>ev.target).files;
    if (files !== null && files.length > 0) {
      const file = files[0];
      reader.readAsDataURL(file);
      reader.onload = (): void => {
        this.image = reader.result as string;
        this.page.hasImage = true;
        (<HTMLInputElement>document.getElementById('image-file')).value = '';
      };
    }
  }

  addDialog(): void {
    const d: Dialog = new Dialog();
    d.dialogOrder = this.page.dialogs.length + 1;
    this.page.dialogs.push(d);
  }

  deleteDialog(dialog: Dialog): void {
    const ind: number = this.page.dialogs.findIndex((x: Dialog): boolean => {
      return x.dialogOrder === dialog.dialogOrder;
    });
    this.page.dialogs.splice(ind, 1);
  }
}
