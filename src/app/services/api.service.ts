import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  StatusIdResult,
  TaleInterface,
  TalesResult,
} from 'src/app/interfaces/interfaces';
import { Tale } from 'src/app/model/tale.model';
import { ClassMapperService } from 'src/app/services/class-mapper.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private cms: ClassMapperService) {}

  getTales(): Observable<Tale[]> {
    return this.http
      .post<TalesResult>(`${environment.apiUrl}/get-tales`, {})
      .pipe(
        map((resp: TalesResult): Tale[] => {
          return this.cms.getTales(resp.list);
        })
      );
  }

  saveTale(tale: TaleInterface): Observable<StatusIdResult> {
    return this.http.post<StatusIdResult>(
      `${environment.apiUrl}/save-tale`,
      tale
    );
  }
}
