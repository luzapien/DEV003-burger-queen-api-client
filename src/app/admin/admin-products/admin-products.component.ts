import { Component } from '@angular/core';
import { RequestService } from 'src/app/servicios/request.service';
import type { Product } from 'src/types';
import { AddProductService } from 'src/app/servicios/addproducts.service';
import { CookieService } from 'ngx-cookie-service';
import { OrdersServiceService } from 'src/app/servicios/orders.service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {
  constructor(
    private requestService: RequestService,
    private cookieService: CookieService,
    public AddProductService: AddProductService,
    public ordersServiceService: OrdersServiceService

  ) {
    this.getProducts()
  }
  date: any = new Date()
  products: Array<Product> = []
  filteredProducts: Array<Product> = []
  modalSwitch: boolean = false
  currentProduct: Product | null = null

  getProducts(): void {
    const token = this.cookieService.get('accessToken');
    this.requestService.getProductsRequest(token).subscribe({
      next: (response) => {
        console.log('estos son los productos', response)
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
  addProducts(name: Product) {
    this.AddProductService.add(name);
    console.log('adding', this.products)
  }

  deleteProducts(id: number) {
    const token = this.cookieService.get('accessToken');
    this.requestService.deletePost(id, token)
      .subscribe(response => {
        console.log('producto eliminado:', response)
      });
  }
  showModal(product: Product) {
    this.modalSwitch = true
    this.currentProduct = product
  }

  closeModal() {
    this.modalSwitch = false
    this.currentProduct = null
  }

  updateData(value: any) {
    if (this.currentProduct) {
      const PRODUCTS: Product = {
        name: value.name,
        price: value.price,
        type: value.type,
        dateEntry: this.date,
        id: this.currentProduct.id,
        image: value.image
      }

      this.ordersServiceService.updateProductService(this.currentProduct.id, PRODUCTS)
        .subscribe(respuesta => {
          console.log('Aqui', respuesta)
        })
    }
  }

}
