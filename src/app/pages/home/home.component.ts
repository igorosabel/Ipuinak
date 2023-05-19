import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Tale } from 'src/app/model/tale.model';
import { ApiService } from 'src/app/services/api.service';
import { MaterialModule } from 'src/app/shared/material/material.module';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [NgFor, NgIf, NgClass, AsyncPipe, RouterLink, MaterialModule],
})
export class HomeComponent {
  tales$: Observable<Tale[]>;
  edit: boolean = false;

  constructor(private as: ApiService) {
    this.tales$ = this.as.getTales();
  }

  changeEdit(): void {
    this.edit = !this.edit;
  }
}
