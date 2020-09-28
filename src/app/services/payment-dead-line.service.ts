import { PaymentDeadLineRequest } from './../models/PaymentDeadLine';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PaymentDeadLineService {
  private readonly url = `${environment.baseUrl}paymentDeadLine`;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<PaymentDeadLineRequest>(this.url)
  }
  getById(id:number) {
    return this.http.get<PaymentDeadLineRequest>(`${this.url}/${id}`)
  }
  postOrPut(paymentDeadLine: PaymentDeadLineRequest) {
    return this.http.post<PaymentDeadLineRequest>(this.url, paymentDeadLine)
  }
  delete(id:number) {
    return this.http.get<boolean>(`${this.url}/${id}`)
  }
}
