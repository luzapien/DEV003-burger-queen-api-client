import { Component } from '@angular/core';
import { AddProductService  } from '../servicios/addproducts.service';
import type { Product } from 'src/types';
import { CookieService } from 'ngx-cookie-service';
import { RequestService } from '../servicios/request.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(
    public AddProductService : AddProductService,
    private requestService: RequestService,
    private cookieService: CookieService
  )
  {
    // this.getProducts()
  }
  products: Array<Product> = []
  producto:any
  getProducts(): void {
    const token = this.cookieService.get('accessToken');
    this.requestService.getProductsRequest(token).subscribe({
      next: (response) => {
        //console.log('estos son los productos',response)
        this.products = response
        for(let i = 0; i < response.length; i++){
          this.producto = response[i]
          
        }
        console.log('un solo producto',this.producto)
        return this.producto
      }
    })
  }
}
