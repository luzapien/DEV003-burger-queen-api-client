import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient
  ) { }

 postRequest(post:object){
  return this.http.post('http://localhost:8080/login',post)
 }
 productsRequest(token:string){
  const headers = new HttpHeaders({
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json; charset=UTF-8",
  })
  return this.http.get('http://localhost:8080/login', { headers });
 }
}
