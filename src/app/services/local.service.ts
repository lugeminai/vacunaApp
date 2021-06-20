import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private readonly http:HttpClient) { }

  getLocal(){
    return this.http.get('/api/local/GetLocal');
  }
}
