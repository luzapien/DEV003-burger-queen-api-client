import { Component } from '@angular/core';
import { RequestService } from '../servicios/request.service';
import type { Product } from 'src/types';
import { AddProductService  } from '../servicios/addproducts.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [CookieService]
})
export class AdminComponent {
constructor(
  private requestService: RequestService,
  private cookieService: CookieService,
  public AddProductService : AddProductService 
)
{
  this.getProducts()
}

products: Array<Product> = []
filteredProducts: Array<Product> = []
modalSwitch:Boolean = false

getProducts(): void {
  const token = this.cookieService.get('accessToken');
  this.requestService.getProductsRequest(token).subscribe({
    next: (response) => {
      console.log('estos son los productos',response)
      this.products = response
      this.filteredProducts = response
      
    }
  })
}
formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

filterByFoodType(type: string) {
  if (type === "all") {
    this.filteredProducts = this.products
    return
  }
  const productBreakfast = this.products.filter((product) => product.type === type)
  this.filteredProducts = productBreakfast
}
addProducts(name:Product) {
  this.AddProductService.add(name);
  console.log('adding', this.products)
}

deleteProducts(id:number){
  const token = this.cookieService.get('accessToken');
  this.requestService.deletePost(id, token )
  .subscribe(response => {
   console.log('producto eliminado:',response)
  });
}
showModal(id:number){
  this.modalSwitch = true
  console.log('editando')
}
}
