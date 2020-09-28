import { RemunerationResponse } from '../models/Remuneration';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RemunerationService {
  private readonly url = `${environment.baseUrl}remuneration`;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<RemunerationResponse>(this.url)
  }
  getById(id:number) {
    return this.http.get<RemunerationResponse>(`${this.url}/${id}`)
  }
  postOrPut(remuneration: RemunerationResponse) {
    return this.http.post<RemunerationResponse>(this.url, remuneration)
  }
  delete(id:number) {
    return this.http.get<boolean>(`${this.url}/${id}`)
  }
}
