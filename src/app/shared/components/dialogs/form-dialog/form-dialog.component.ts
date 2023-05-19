import { A11yModule } from '@angular/cdk/a11y';
import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogField } from 'src/app/interfaces/interfaces';
import { MaterialModule } from 'src/app/shared/material/material.module';

@Component({
  standalone: true,
  selector: 'otpv-form-dialog',
  templateUrl: './form-dialog.component.html',
  imports: [
    A11yModule,
    NgFor,
    NgIf,
    MatDialogModule,
    MaterialModule,
    FormsModule,
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
