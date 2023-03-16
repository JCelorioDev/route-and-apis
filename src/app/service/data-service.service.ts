import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  url:string = 'https://jsonplaceholder.typicode.com/';

  constructor(private http:HttpClient) { 

  }

  getPosts(){
    return this.http.get<any>(`${this.url}posts`) 
  }
}
