import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@env/environment';
import {
  CharacterInterface,
  CharactersResult,
} from '@interfaces/character.interfaces';
import { StatusIdResult, StatusResult } from '@interfaces/interfaces';
import {
  TaleInterface,
  TaleResult,
  TalesResult,
} from '@interfaces/tale.interfaces';
import Character from '@model/character.model';
import Tale from '@model/tale.model';
import ClassMapperService from '@services/class-mapper.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class ApiService {
  private http: HttpClient = inject(HttpClient);
  private cms: ClassMapperService = inject(ClassMapperService);

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

  getTale(id: number): Observable<Tale> {
    return this.http
      .post<TaleResult>(`${environment.apiUrl}/get-tale`, { id })
      .pipe(
        map((resp: TaleResult): Tale => {
          return this.cms.getTale(resp.tale);
        })
      );
  }

  saveCharacter(character: CharacterInterface): Observable<StatusResult> {
    return this.http.post<StatusResult>(
      `${environment.apiUrl}/save-character`,
      character
    );
  }

  getCharacters(idTale: number): Observable<Character[]> {
    return this.http
      .post<CharactersResult>(`${environment.apiUrl}/get-characters`, {
        idTale,
      })
      .pipe(
        map((resp: CharactersResult): Character[] => {
          return this.cms.getCharacters(resp.list);
        })
      );
  }
}
