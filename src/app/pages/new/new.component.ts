import {
  Component,
  ElementRef,
  Signal,
  inject,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatToolbar } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import { StatusIdResult } from '@interfaces/interfaces';
import Tale from '@model/tale.model';
import { DialogService } from '@osumi/angular-tools';
import ApiService from '@services/api.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  imports: [
    RouterLink,
    FormsModule,
    MatToolbar,
    MatIconButton,
    MatIcon,
    MatFormField,
    MatLabel,
    MatInput,
  ],
  providers: [DialogService],
})
export default class NewComponent {
  private as: ApiService = inject(ApiService);
  private ds: DialogService = inject(DialogService);
  private router: Router = inject(Router);

  name: Signal<ElementRef> = viewChild.required<ElementRef>('name');
  tale: Tale = new Tale();

  constructor() {
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
        .subscribe((): void => {
          this.name().nativeElement.focus();
        });
      return;
    }

    this.as.saveTale(this.tale.toInterface()).subscribe({
      next: (result: StatusIdResult): void => {
        if (result.status === 'ok') {
          this.router.navigate(['/edit/' + result.id]);
        } else {
          this.saveError();
        }
      },
      error: (): void => {
        this.saveError();
      },
    });
  }

  saveError(): void {
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
}
