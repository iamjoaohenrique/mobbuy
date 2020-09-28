import { environment } from './../../environments/environment';
import { RemunerationTypeResponse } from './../models/RemunerationType';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemunerationTypeService {
  private readonly url = `${environment.baseUrl}remunerationtype`;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<RemunerationTypeResponse>(this.url)
  }
  getById(id:number) {
    return this.http.get<RemunerationTypeResponse>(`${this.url}/${id}`)
  }
  postOrPut(remunerationType: RemunerationTypeResponse) {
    return this.http.post<RemunerationTypeResponse>(this.url, remunerationType)
  }
  delete(id:number) {
    return this.http.get<boolean>(`${this.url}/${id}`)
  }
}

