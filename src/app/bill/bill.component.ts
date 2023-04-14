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
      return pv = pv + cv.product.price * cv.qty
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
  }
  
  increment(){
    this.addProductService.products.map((element)=>element.qty++)
  }
  decrement(){
    let productsNumber:any=0;
    this.addProductService.products.forEach((element)=> {
      if(element.qty-1 < 0){
        // element.qty--
        return productsNumber;
      }
    })
    }
    public deleteProduct():void {
      this.addProductService.products = this.addProductService.products.filter((product) => product.qty > 0 )
    }
  }
