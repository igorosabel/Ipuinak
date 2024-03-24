import { A11yModule, CdkTrapFocus } from '@angular/cdk/a11y';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { DialogField } from '@app/interfaces/dialog.interfaces';

@Component({
  standalone: true,
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  imports: [
    A11yModule,
    FormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatFormField,
    MatLabel,
    MatInput,
    MatHint,
    MatButton,
    CdkTrapFocus,
  ],
})
export class FormDialogComponent {
  public title: string = '';
  public content: string = '';
  public fields: DialogField[] | undefined = [];
  public ok: string = 'Continuar';
  public cancel: string | undefined = 'Cancelar';

  constructor(public dialogRef: MatDialogRef<FormDialogComponent>) {}
}
