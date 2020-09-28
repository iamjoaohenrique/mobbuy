import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetProfile } from '../models/GetProfile';

@Injectable({
  providedIn: 'root'
})



export class GetprofilesService {

  constructor(private http: HttpClient){}

  httpOptions = {
    headers: new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*')
    .set('Token', 'e81770b51561ca52a4342c2b654336f174873aac')
    .set('Authorization', 'Basic '+'YWRtaW46MTIzNDU2')

  };

  getProfiles()  {
    console.log(this.httpOptions);
    return this.http.get<GetProfile[]>('http://www.mobbuygift.com.br:9080/interfacePronto-0.0.1-SNAPSHOT/company',this.httpOptions);
  }

}