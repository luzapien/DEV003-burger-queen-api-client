import { Component } from '@angular/core';
import { AddProductService } from '../servicios/addproducts.service';
import { RequestService } from '../servicios/request.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-add-name',
  templateUrl: './add-name.component.html',
  styleUrls: ['./add-name.component.css'],
  providers: [CookieService]
})
export class AddNameComponent {

  // variable namesService is public so we can use it in different components
  constructor(
    public namesService: AddProductService,
    public addProductService: AddProductService,
    private requestService: RequestService,
    private cookieService: CookieService
  ) { }

  name: string = '';

  addnames() {
    this.namesService.addName(this.name);
    this.name = ''; // clean the input 
  }
  // sendProducts() {
  //   const token = this.cookieService.get('accessToken');
  //   const order = this.namesService.products
  //   this.requestService.createOrder(order, token).subscribe({
  //     next: (response) => {
  //       console.log('new order', response)

  //     }
  //   })

  // }
  public sendOrder() {
    const token = this.cookieService.get('accessToken');
    // const id = this.cookieService.set()
    const bodyHttp = {
      client: this.name,
      userId: Number(sessionStorage.getItem('userId')),
      products: this.addProductService.products,
      status: 'pending',
      dataEntry: new Date().toLocaleString()
    }
    this.requestService.createOrder(token, bodyHttp)
      .subscribe({  // Nos subscribimos al observable
        next: (data: any) => { // codigo correcto
          console.log(data)
          this.addProductService.products = []
        },
        error: (err: any) => {
          console.log('error', err) // gestion de errores
        },
        complete: () => {
          console.log('complete') // codigo correcto
        }
      })
  }
}
