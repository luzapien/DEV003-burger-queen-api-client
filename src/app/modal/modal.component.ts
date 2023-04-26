import { Component } from '@angular/core';
import { AddProductService  } from '../servicios/addproducts.service';
import { Product } from 'src/types';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  constructor(
    public AddProductService : AddProductService
  )
  {}
  products: Product[] = [];
}
