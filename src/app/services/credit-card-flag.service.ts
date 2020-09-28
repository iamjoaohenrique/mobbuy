import { CreditCardFlagRequest } from './../models/CreditCardFlag';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreditCardFlagService {
  private readonly url = `${environment.baseUrl}creditCardFlag`;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<CreditCardFlagRequest>(this.url)
  }
  getById(id:number) {
    return this.http.get<CreditCardFlagRequest>(`${this.url}/${id}`)
  }
  postOrPut(creditCardFlag: CreditCardFlagRequest) {
    return this.http.post<CreditCardFlagRequest>(this.url, creditCardFlag)
  }
  delete(id:number) {
    return this.http.get<boolean>(`${this.url}/${id}`)
  }
}
