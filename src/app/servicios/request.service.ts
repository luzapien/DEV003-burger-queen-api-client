import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import type { LoginResponse, Product, ProductService} from '../../types'

const baseUrl = 'http://localhost:8080'
const urlBase = 'https://burger-queen-api-mock-99ph.onrender.com'
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient
  ) { }

  loginRequest(value: object):Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${urlBase}/login`, value)
  }

  getProductsRequest(token: any) {
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json; charset=UTF-8",
    })
    return this.http.get<Array<Product>>(`${urlBase}/products`, { headers });
  }

  createOrder(token: string, body: any): any {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
        'content-type': 'application/json'
      })
    }
    return this.http.post(`${urlBase}/orders`, body, httpOptions)
  }

  deletePost(id:string, token: string |null){
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json; charset=UTF-8",
    })
    return this.http.delete<Product>('https://burger-queen-api-mock-99ph.onrender.com/products'+'/'+id, {headers});
  }

  deletePostUser(id:string, token: string |null){
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json; charset=UTF-8",
    })
    return this.http.delete<Product>('https://burger-queen-api-mock-99ph.onrender.com/users'+'/'+id, {headers});
  }

  createProduct(token: string |null, body: any): any {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
        'content-type': 'application/json'
      })
    }
    return this.http.post(`${urlBase}/products`, body, httpOptions)
  }
}
