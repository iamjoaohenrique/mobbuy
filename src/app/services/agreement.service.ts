import { AgreementRequest } from './../models/Agreement';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgreementService {
  private readonly url = `${environment.baseUrl}agreement`;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<AgreementRequest>(this.url)
  }
  getById(id:number) {
    return this.http.get<AgreementRequest>(`${this.url}/${id}`)
  }
  postOrPut(agreement: AgreementRequest) {
    return this.http.post<AgreementRequest>(this.url, agreement)
  }
  delete(id:number) {
    return this.http.get<boolean>(`${this.url}/${id}`)
  }
}
