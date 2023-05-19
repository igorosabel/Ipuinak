import { A11yModule } from '@angular/cdk/a11y';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/shared/material/material.module';

@Component({
  standalone: true,
  selector: 'otpv-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  imports: [A11yModule, MaterialModule],
})
export class ConfirmDialogComponent {
  public title: string = '';
  public content: string = '';
  public ok: string = 'Continuar';
  public cancel: string | undefined = 'Cancelar';

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {}
}
