import { Component } from '@angular/core';
import { AddProductService } from '../servicios/addproducts.service';
import { RequestService } from '../servicios/request.service';
import { Product } from 'src/types';
import { CookieService } from 'ngx-cookie-service';
import { faTrashAlt, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

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
  faTrash = faTrashAlt;
  faPlus = faPlus;
  faMinus = faMinus;
  date: Date = new Date();

  removeProductsTicket(productId: number) {
    this.addProductService.removeProductsTicket(productId);
  }

  totalPrice() {
    const total = this.addProductService.products.reduce((pv, cv) => {
      return pv = pv + cv.product.price * cv.quantity
    }, 0)
    return total
  }
  increment(){
    this.addProductService.products.map((element)=>element.quantity++)
  }
  decrement(){
    let productsNumber:any=0;
    this.addProductService.products.forEach((element)=> {
      if(element.quantity -1 < 0){
        // element.qty--
        return productsNumber;
      }
    })
    }
    public deleteProduct():void {
      this.addProductService.products = this.addProductService.products.filter((product) => product.quantity > 0 )
    }
}
