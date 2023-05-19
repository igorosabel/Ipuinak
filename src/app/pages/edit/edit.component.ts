import { NgIf } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { CharacterDetailComponent } from 'src/app/components/character-detail/character-detail.component';
import { PageDetailComponent } from 'src/app/components/page-detail/page-detail.component';
import { StatusIdResult } from 'src/app/interfaces/interfaces';
import { Tale } from 'src/app/model/tale.model';
import { ApiService } from 'src/app/services/api.service';
import { DialogService } from 'src/app/services/dialog.service';
import { MaterialModule } from 'src/app/shared/material/material.module';

@Component({
  standalone: true,
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  imports: [
    NgIf,
    RouterLink,
    FormsModule,
    MaterialModule,
    PageDetailComponent,
    CharacterDetailComponent,
  ],
  providers: [DialogService],
})
export default class EditComponent implements OnInit {
  @ViewChild('name', { static: true }) name!: ElementRef;
  @ViewChild('pageDetail', { static: true }) pageDetail!: PageDetailComponent;
  tale: Tale = new Tale();
  selectedTab: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private as: ApiService,
    private ds: DialogService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params): void => {
      const id: number = params['id'];
      console.log(id);
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
        .subscribe((result: boolean): void => {
          this.name.nativeElement.focus();
        });
      return;
    }

    this.as
      .saveTale(this.tale.toInterface())
      .subscribe((result: StatusIdResult): void => {
        if (result.status === 'error') {
          this.ds
            .alert({
              title: 'ERROR',
              content: 'Ha ocurrido un error al guardar el cuento.',
              ok: 'Continuar',
            })
            .subscribe((result: boolean): void => {
              this.name.nativeElement.focus();
            });
        }
      });
  }

  add(): void {
    console.log(this.selectedTab);
    if (this.selectedTab === 0) {
      this.pageDetail.openDetail(null, this.tale);
    }
  }
}
