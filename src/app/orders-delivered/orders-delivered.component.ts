import { Component } from '@angular/core';
import { Order } from 'src/types';
import { OrdersServiceService } from '../servicios/orders.service.service';
import { AddProductService } from '../servicios/addproducts.service';

@Component({
  selector: 'app-orders-delivered',
  templateUrl: './orders-delivered.component.html',
  styleUrls: ['./orders-delivered.component.css']
})
export class OrdersDeliveredComponent {
  constructor(
    public ordersServiceService: OrdersServiceService,
    public addProductService: AddProductService
  ){}
  public listaOr: Order[] = []

  ngOnInit(): void {
    this.getOrdersM()
  }
  getOrdersM() {
    this.ordersServiceService.getOrderService()
      .subscribe(respuesta => {
        this.listaOr = respuesta;
        console.log('Aqui', respuesta)
      })
  }
}
