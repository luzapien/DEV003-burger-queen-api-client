import { Component } from '@angular/core';
import { RequestService } from 'src/app/servicios/request.service';
import type { Product } from 'src/types';
import { AddProductService } from 'src/app/servicios/addproducts.service';
import { OrdersServiceService } from 'src/app/servicios/orders.service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { NewProductUserService } from 'src/app/new-product-user.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {
  constructor(
    private requestService: RequestService,
    public AddProductService: AddProductService,
    public ordersServiceService: OrdersServiceService,
    private NewProductUserService: NewProductUserService
  ) {
    this.getProducts()
  }

  date: any = new Date()
  products: Array<Product> = []
  filteredProducts: Array<Product> = []
  currentProduct: Product | null = null
  modal: boolean = false

  ngOnInit():void{
    this.NewProductUserService.disparador.subscribe(data => {
      console.log('recibiendo data...',data)
      this.getProducts()
      this.currentProduct = null
    })
  }


  getProducts(): void {
    const token = localStorage.getItem('accessToken');
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

  deleteProducts(id: any) {
    const token = localStorage.getItem('accessToken');
    this.requestService.deletePost(id, token)
      .subscribe(response => {
        console.log('producto eliminado:', response)
      });
  }

  onShowModal(product: Product) {
    this.currentProduct = product
  }

  onCloseModal() {
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
      const closeModalBtn = document.getElementById('closeModalBtn')
      this.ordersServiceService.updateProductService(this.currentProduct.id, PRODUCTS)
        .subscribe({
          next: (response) => {
            closeModalBtn?.click()
            this.onCloseModal()
            this.getProducts()
            console.log(response)
          }
        })
    }
  }
  newProduct(value: Product) {
    const token = localStorage.getItem('accessToken')
    const newProduct: Product = {
      name: value.name,
      price: value.price,
      image: value.image,
      type: value.type,
      dateEntry: this.date,
      id: value.id,
    };
    this.requestService.createProduct(token, newProduct).subscribe({
      next: (response: Product) => {
        console.log(response)
        this.getProducts()
      }
    })
  }
}
