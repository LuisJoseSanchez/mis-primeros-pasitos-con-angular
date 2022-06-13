import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ChistesService {

  constructor(private http: HttpClient) { }

  getChiste(): Observable<string> {
    return this.http.get('https://api.chucknorris.io/jokes/random')
      .pipe(map((respuesta: any) => respuesta.value));
  }
}
