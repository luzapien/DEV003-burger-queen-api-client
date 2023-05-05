import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AddProductService } from '../servicios/addproducts.service';
import { Injectable,Output,EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import { Order, Product, User} from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class OrdersServiceService {

  constructor(
    private http: HttpClient) {} // servicio que conecta con la API


  url:string = 'https://burger-queen-api-mock-04j3.onrender.com/orders';
  urlProducts:string = 'https://burger-queen-api-mock-04j3.onrender.com/products'
  urlUsers:string = 'https://burger-queen-api-mock-04j3.onrender.com/users'
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() disparador: EventEmitter<any> = new EventEmitter();
  // api_key = sessionStorage.setItem("token", "accesstoken");
  accessToken = localStorage.getItem('accessToken');
  // accessToken =  this.cookieService.get('accessToken');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.accessToken}`,
    })
  };

  //Metodos para comunciarse con la API.
  getOrderService(): Observable<Order[]> {
    return this.http.get<Order[]>(this.url, this.httpOptions);
  }

  postOrderService(orders:Order): Observable<Order> {
    return this.http.post<Order>(this.url,orders,this.httpOptions);
  }

  updateOrderService(id: number, updateOrder: Order):Observable<Order> {
    const urlPatch = `${this.url}/${id}`;   // PATCH api/heroes/42
    return this.http.patch<Order>(urlPatch, updateOrder, this.httpOptions);
  }
  updateProductService(id: any, updateProduct: Product):Observable<Product> {
    const urlPatch = `${this.urlProducts}/${id}`;   // PATCH api/heroes/42
    return this.http.patch<Product>(urlPatch, updateProduct, this.httpOptions);
  }

  getUserService(): Observable<User[]> {
    return this.http.get<User[]>(this.urlUsers, this.httpOptions);
  }

  postUsersService(user:User): Observable<User> {
    return this.http.post<User>(this.urlUsers, user,this.httpOptions);
  }

  updateUsersService(id: any, updateUsers: User):Observable<User> {
    const urlPatch = `${this.urlUsers}/${id}`;   // PATCH api/heroes/42
    return this.http.patch<User>(urlPatch, updateUsers, this.httpOptions);
  }

}
