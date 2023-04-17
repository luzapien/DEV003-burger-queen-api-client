import { Injectable } from '@angular/core';
import { Product, ProductsService } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {
  // static getProducts(): import("src/types").OrdersProduct {
  //   throw new Error('Method not implemented.');
  // }
  
  constructor() { }
// Propiedad de array de strings en un array vacio
  products:ProductsService[] = [];// Array donde estan los productos

//Funcion para agregar productos
  add(product: Product){
    const productExist= this.products.some((element) =>element.product.id === product.id )
    if(productExist){
      this.products=this.products.map((element)=> element.product.id === product.id?{product:element.product, qty:element.qty+1}:element)
    }else{
      this.products=[...this.products,{product,qty:1}]
    }
    // this.products.push(product);
  }

  removeProductsTicket(productId:any) {
    this.products.map((item, index) => {
      if (item.product.id === productId) {
        this.products.splice(index, 1);
      }
    });
  }

  // name service
  // Propiedad de array de strings en un array vacio
  names:string[] = [];

  addName(name: string){
    this.names.push(name);
  }

  // static getProducts(): import("src/types").OrdersProduct{
  //   return this.products;
  // }
  
}
