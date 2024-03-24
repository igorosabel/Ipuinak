import { A11yModule } from '@angular/cdk/a11y';
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
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  imports: [
    A11yModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
  ],
})
export class AlertDialogComponent {
  public title: string = '';
  public content: string = '';
  public ok: string = 'Continuar';

  constructor(public dialogRef: MatDialogRef<AlertDialogComponent>) {}
}
