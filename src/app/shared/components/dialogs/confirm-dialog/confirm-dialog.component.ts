import { A11yModule, CdkTrapFocus } from '@angular/cdk/a11y';
import { Component, WritableSignal, inject, signal } from '@angular/core';
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
export default class ConfirmDialogComponent {
  public dialogRef: MatDialogRef<ConfirmDialogComponent> = inject(MatDialogRef);

  public title: WritableSignal<string> = signal<string>('');
  public content: WritableSignal<string> = signal<string>('');
  public ok: WritableSignal<string> = signal<string>('Continuar');
  public cancel: WritableSignal<string | undefined> = signal<
    string | undefined
  >('Cancelar');
}
