import { Component } from '@angular/core';
import { AddProductService } from '../servicios/addproducts.service';
import { NewProduct, Product } from 'src/types';
import { CookieService } from 'ngx-cookie-service';
import { RequestService } from '../servicios/request.service';
import { NewProductUserService } from '../new-product-user.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(
    public AddProductService: AddProductService,
    public cookieService: CookieService,
    public requestService: RequestService,
    private newProductUserService: NewProductUserService
  ) { }
  message: string = 'Add new product'
  products: Product[] = [];
  date: any = new Date()
  currentProduct: Product | null = null
  filteredProducts: Array<Product> = []
  modal = false


  getProducts(): void {
    console.log('get products called')
    const token = localStorage.getItem('accessToken');
    this.requestService.getProductsRequest(token).subscribe({
      next: (response) => {
        // console.log('estos son los productos', response)
        this.products = response
        this.filteredProducts = response
      }
    })
  }

  newProduct(value: Product) {
    const token = localStorage.getItem('accessToken')
    const newProduct: NewProduct = {
      name: value.name,
      price: value.price,
      image: value.image,
      type: value.type,
      id: value.id,
    };
    this.requestService.createProduct(token, newProduct).subscribe({
      next: (response: NewProduct) => {
        // console.log(response)
        this.getProducts()
        this.newProductUserService.disparador.emit({
          data:response
        })
      }
    })
  }
  onCloseModal() {
    this.currentProduct = null
  }

}
