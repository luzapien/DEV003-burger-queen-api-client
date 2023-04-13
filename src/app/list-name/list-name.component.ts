import { Component } from '@angular/core';
import { AddProductService } from '../servicios/addproducts.service';
import { Product } from 'src/types';

@Component({
  selector: 'app-list-name',
  templateUrl: './list-name.component.html',
  styleUrls: ['./list-name.component.css']
})
export class ListNameComponent {
// // variable that will list the names
//   constructor(public AddProductService: AddProductService ){}

  // products: Array<Product> = []

  // deleteProducts(key:number) {
  //   this.products.forEach((value,index) =>{
  //     if(value.id == key)
  //     this.products.splice(index,1)
  //     console.log('este es el producto', this.products)
  //   })
  // }

}
