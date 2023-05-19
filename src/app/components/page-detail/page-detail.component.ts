import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnimationOption } from 'src/app/interfaces/interfaces';
import { Dialog } from 'src/app/model/dialog.model';
import { Page } from 'src/app/model/page.model';
import { Tale } from 'src/app/model/tale.model';
import { MaterialModule } from 'src/app/shared/material/material.module';

@Component({
  standalone: true,
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.scss'],
  imports: [NgClass, NgStyle, NgIf, NgFor, FormsModule, MaterialModule],
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

  openDetail(page: Page | null, tale: Tale): void {
    this.show = true;
    this.tale = tale;
    if (page !== null) {
      this.page = page;
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
}
