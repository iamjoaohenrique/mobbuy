import { PlanRequest } from './../models/Plan';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private readonly url = `${environment.baseUrl}plan`;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<PlanRequest>(this.url)
  }
  getById(id:number) {
    return this.http.get<PlanRequest>(`${this.url}/${id}`)
  }
  postOrPut(plan: PlanRequest) {
    return this.http.post<PlanRequest>(this.url, plan)
  }
  delete(id:number) {
    return this.http.get<boolean>(`${this.url}/${id}`)
  }
}
