import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { StatusIdResult } from 'src/app/interfaces/interfaces';
import { Tale } from 'src/app/model/tale.model';
import { ApiService } from 'src/app/services/api.service';
import { DialogService } from 'src/app/services/dialog.service';
import { MaterialModule } from 'src/app/shared/material/material.module';

@Component({
  standalone: true,
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  imports: [RouterLink, FormsModule, MaterialModule],
  providers: [DialogService],
})
export default class NewComponent {
  @ViewChild('name', { static: true }) name!: ElementRef;
  tale: Tale = new Tale();

  constructor(
    private as: ApiService,
    private ds: DialogService,
    private router: Router
  ) {
    this.tale.name = 'Nuevo cuento';
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
        if (result.status === 'ok') {
          this.router.navigate(['/edit/' + result.id]);
        } else {
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
}
