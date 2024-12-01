import { AsyncPipe } from '@angular/common';
import { Component, WritableSignal, inject, signal } from '@angular/core';
import {
  MatButton,
  MatFabButton,
  MatIconButton,
} from '@angular/material/button';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import Tale from '@model/tale.model';
import ApiService from '@services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    AsyncPipe,
    RouterLink,
    MatToolbar,
    MatIconButton,
    MatButton,
    MatFabButton,
    MatIcon,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
  ],
})
export default class HomeComponent {
  private as: ApiService = inject(ApiService);

  tales$: Observable<Tale[]>;
  edit: WritableSignal<boolean> = signal<boolean>(false);

  constructor() {
    this.tales$ = this.as.getTales();
  }

  changeEdit(): void {
    this.edit.update((value: boolean): boolean => !value);
  }
}
