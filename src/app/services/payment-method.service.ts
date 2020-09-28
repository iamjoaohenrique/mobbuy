import { PaymentMethodRequest } from './../models/PaymentMethod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
  private readonly url = `${environment.baseUrl}paymentMethod`;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<PaymentMethodRequest>(this.url)
  }
  getById(id:number) {
    return this.http.get<PaymentMethodRequest>(`${this.url}/${id}`)
  }
  postOrPut(paymentMethod: PaymentMethodRequest) {
    return this.http.post<PaymentMethodRequest>(this.url, paymentMethod)
  }
  delete(id:number) {
    return this.http.get<boolean>(`${this.url}/${id}`)
  }

}
