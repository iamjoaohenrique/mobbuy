import { ServiceEntityRequest } from './../models/ServiceEntity';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceEntityService {
  private readonly url = `${environment.baseUrl}service`;
  
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<ServiceEntityRequest>(this.url)
  }
  getById(id:number) {
    return this.http.get<ServiceEntityRequest>(`${this.url}/${id}`)
  }
  postOrPut(serviceEntity: ServiceEntityRequest) {
    return this.http.post<ServiceEntityRequest>(this.url, serviceEntity)
  }
  delete(id:number) {
    return this.http.get<boolean>(`${this.url}/${id}`)
  }
}
