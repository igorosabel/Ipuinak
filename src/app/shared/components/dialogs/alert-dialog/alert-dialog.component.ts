import { A11yModule } from '@angular/cdk/a11y';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/shared/material/material.module';

@Component({
  standalone: true,
  selector: 'otpv-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  imports: [A11yModule, MaterialModule],
})
export class AlertDialogComponent {
  public title: string = '';
  public content: string = '';
  public ok: string = 'Continuar';

  constructor(public dialogRef: MatDialogRef<AlertDialogComponent>) {}
}
