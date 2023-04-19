import { Component, ViewChild } from '@angular/core';
import { OrdersServiceService } from '../servicios/orders.service.service';
import { Order } from 'src/types';
import { AddProductService } from '../servicios/addproducts.service';


@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css'],
})


export class KitchenComponent {


  public listaOr: Order[] = []
   // dataChange: any = new Date();
   date: Date = new Date();

  constructor(
    private ordersServiceService: OrdersServiceService,
    public AddProductService: AddProductService
  ) { }

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

  updateOrdesM(id: any, dateEntry: any) {
    // const ticket= order 

    const time = this.date
    let diaEnMils = 60000
    let days = new Date(time).getTime() - new Date(dateEntry).getTime();
    let resultTime = (days / diaEnMils);
    console.log(days)

    const ORDERS: Order = {
      status: 'Delivered',
      dateProcessed: time,
      time: resultTime
    };

    this.ordersServiceService.updateOrderService(id, ORDERS)
      .subscribe(respuesta => {
        console.log('Aqui', respuesta)
      })
  }
  refresh(): void { window.location.reload(); }

}
