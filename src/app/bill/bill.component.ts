import { Component } from '@angular/core';
import { AddProductService } from '../servicios/addproducts.service';
import { RequestService } from '../servicios/request.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
  constructor(
    public addProductService: AddProductService
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
}
