import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Character } from 'src/app/model/character.model';
import { Tale } from 'src/app/model/tale.model';
import { DialogService } from 'src/app/services/dialog.service';
import { MaterialModule } from 'src/app/shared/material/material.module';

@Component({
  standalone: true,
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
  imports: [NgClass, NgStyle, NgIf, FormsModule, MaterialModule],
})
export class CharacterDetailComponent {
  show: boolean = false;
  tale: Tale = new Tale();
  character: Character = new Character();
  @ViewChild('characterName', { static: true }) characterName!: ElementRef;

  constructor(private ds: DialogService) {}

  openDetail(character: Character, tale: Tale): void {
    this.show = true;
    this.tale = tale;
    this.character = character;
  }

  close(): void {
    this.show = false;
  }

  addImage(): void {
    const imageFile: HTMLElement | null =
      document.getElementById('character-file');
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
        this.character.data = reader.result as string;
        this.character.hasImage = true;
        (<HTMLInputElement>document.getElementById('character-file')).value =
          '';
      };
    }
  }

  saveCharacter(): void {
    if (this.character.name === '') {
      this.ds
        .alert({
          title: 'ERROR',
          content: 'No pueddes dejar el nombre del personaje en blanco.',
          ok: 'Continuar',
        })
        .subscribe((result: boolean): void => {
          this.characterName.nativeElement.focus();
        });
    }
    console.log(this.character);
  }
}
