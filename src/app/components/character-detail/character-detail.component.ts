import { NgClass, NgStyle } from '@angular/common';
import {
  Component,
  ElementRef,
  OutputEmitterRef,
  Signal,
  WritableSignal,
  inject,
  output,
  signal,
  viewChild,
} from '@angular/core';
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
import { StatusResult } from '@interfaces/interfaces';
import Character from '@model/character.model';
import Tale from '@model/tale.model';
import ApiService from '@services/api.service';
import DialogService from '@services/dialog.service';

@Component({
  standalone: true,
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
  imports: [
    NgClass,
    NgStyle,
    FormsModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatIconButton,
    MatIcon,
    MatFormField,
    MatLabel,
    MatInput,
    MatPrefix,
  ],
})
export default class CharacterDetailComponent {
  private as: ApiService = inject(ApiService);
  private ds: DialogService = inject(DialogService);

  show: WritableSignal<boolean> = signal<boolean>(false);
  tale: Tale = new Tale();
  character: Character = new Character();
  characterName: Signal<ElementRef> =
    viewChild.required<ElementRef>('characterName');

  characterSaveEvent: OutputEmitterRef<boolean> = output<boolean>();

  openDetail(character: Character, tale: Tale): void {
    this.show.set(true);
    this.tale = tale;
    this.character = character;
  }

  close(): void {
    this.show.update((value: boolean): boolean => !value);
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
        .subscribe((): void => {
          this.characterName().nativeElement.focus();
        });
    }
    this.as
      .saveCharacter(this.character.toInterface())
      .subscribe((result: StatusResult): void => {
        if (result.status === 'ok') {
          this.characterSaveEvent.emit(true);
        } else {
          this.ds
            .alert({
              title: 'ERROR',
              content: 'Ocurrió un error al guardar el personaje.',
              ok: 'Continuar',
            })
            .subscribe((): void => {
              this.characterName().nativeElement.focus();
            });
        }
      });
  }
}
