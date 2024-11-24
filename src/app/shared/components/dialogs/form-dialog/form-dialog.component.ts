import { A11yModule, CdkTrapFocus } from '@angular/cdk/a11y';
import { Component, WritableSignal, inject, signal } from '@angular/core';
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
import { DialogField } from '@interfaces/dialog.interfaces';

@Component({
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
export default class FormDialogComponent {
  public dialogRef: MatDialogRef<FormDialogComponent> = inject(MatDialogRef);

  public title: WritableSignal<string> = signal<string>('');
  public content: WritableSignal<string> = signal<string>('');
  public fields: WritableSignal<DialogField[] | undefined> = signal<
    DialogField[] | undefined
  >([]);
  public ok: WritableSignal<string> = signal<string>('Continuar');
  public cancel: WritableSignal<string | undefined> = signal<
    string | undefined
  >('Cancelar');
}
