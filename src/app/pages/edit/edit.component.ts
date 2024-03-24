import { NgStyle } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  Signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFabButton, MatIconButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { MatToolbar } from '@angular/material/toolbar';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { CharacterDetailComponent } from '@components/character-detail/character-detail.component';
import { PageDetailComponent } from '@components/page-detail/page-detail.component';
import { StatusIdResult } from '@interfaces/interfaces';
import { Character } from '@model/character.model';
import { Page } from '@model/page.model';
import { Tale } from '@model/tale.model';
import { ApiService } from '@services/api.service';
import { DialogService } from '@services/dialog.service';

@Component({
  standalone: true,
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  imports: [
    NgStyle,
    RouterLink,
    PageDetailComponent,
    CharacterDetailComponent,
    MatToolbar,
    MatIconButton,
    MatIcon,
    MatFormField,
    MatLabel,
    MatInput,
    MatTabGroup,
    MatTab,
    MatFabButton,
    FormsModule,
  ],
  providers: [DialogService],
})
export default class EditComponent implements OnInit {
  name: Signal<ElementRef> = viewChild.required<ElementRef>('name');
  pageDetail: Signal<PageDetailComponent> =
    viewChild.required<PageDetailComponent>('pageDetail');
  characterDetail: Signal<CharacterDetailComponent> =
    viewChild.required<CharacterDetailComponent>('characterDetail');
  tale: Tale = new Tale();
  taleSaved: boolean = false;
  selectedTab: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private as: ApiService,
    private ds: DialogService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params): void => {
      const id: number = params['id'];
      this.as.getTale(id).subscribe((result: Tale): void => {
        this.tale = result;
      });
    });
  }

  saveTale(): void {
    if (this.tale.name === '') {
      this.ds
        .alert({
          title: 'ERROR',
          content: 'No puedes dejar el nombre del cuento en blanco.',
          ok: 'Continuar',
        })
        .subscribe((): void => {
          this.name().nativeElement.focus();
        });
      return;
    }

    this.as
      .saveTale(this.tale.toInterface())
      .subscribe((result: StatusIdResult): void => {
        if (result.status === 'ok') {
          this.taleSaved = true;
          window.setTimeout((): void => {
            this.taleSaved = false;
          }, 3000);
        }
        if (result.status === 'error') {
          this.ds
            .alert({
              title: 'ERROR',
              content: 'Ha ocurrido un error al guardar el cuento.',
              ok: 'Continuar',
            })
            .subscribe((): void => {
              this.name().nativeElement.focus();
            });
        }
      });
  }

  add(): void {
    if (this.selectedTab === 0) {
      const p: Page = new Page();
      p.idTale = this.tale.id;
      p.pageOrder = this.tale.pages.length + 1;

      this.pageDetail().openDetail(p, this.tale);
    }
    if (this.selectedTab === 1) {
      const c: Character = new Character();
      c.idTale = this.tale.id;

      this.characterDetail().openDetail(c, this.tale);
    }
  }

  characterSaved(ev: boolean): void {
    if (ev && this.tale.id !== null) {
      this.as
        .getCharacters(this.tale.id)
        .subscribe((result: Character[]): void => {
          this.tale.characters = result;
          this.characterDetail().close();
        });
    }
  }
}
