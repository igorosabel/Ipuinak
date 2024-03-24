import { A11yModule, CdkTrapFocus } from '@angular/cdk/a11y';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  standalone: true,
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  imports: [
    A11yModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    CdkTrapFocus,
  ],
})
export class ConfirmDialogComponent {
  public title: string = '';
  public content: string = '';
  public ok: string = 'Continuar';
  public cancel: string | undefined = 'Cancelar';

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {}
}
