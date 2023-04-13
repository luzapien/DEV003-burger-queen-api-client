import { Component } from '@angular/core';
import { AddProductService } from '../servicios/addproducts.service';
import { RequestService } from '../servicios/request.service';
import { Product } from 'src/types';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
  providers: [CookieService]
})
export class BillComponent {
  constructor(
    public addProductService: AddProductService,
    private requestService: RequestService,
    private cookieService: CookieService
  ) { }
  removeProductsTicket(productId: number) {
    this.addProductService.removeProductsTicket(productId);
  }
  totalPrice() {
    const total = this.addProductService.products.reduce((pv, cv) => {
      return pv = pv + cv.price
    }, 0)
    return total
  }
  date: Date = new Date();
  
  sendProducts(){
    this.date
    // const token = this.cookieService.get('accessToken');
    // const order = this.addProductService.products
    // this.requestService.createOrder(order, token).subscribe({
    //   next:(response) => {
    console.log(this.addProductService.products, this.date)

    //   }
    // })
   
  }
}
