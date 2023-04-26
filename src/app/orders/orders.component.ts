import { Component } from '@angular/core';
import { OrdersServiceService } from '../servicios/orders.service.service';
import { AddProductService } from '../servicios/addproducts.service';
import { Order } from 'src/types';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  public listaOr: Order[] = []
  date: Date = new Date();
  
  constructor(
    public ordersServiceService: OrdersServiceService,
    public addProductService: AddProductService
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
  totalPrice() {
    const total = this.addProductService.products.reduce((pv, cv) => {
      return pv = pv + cv.product.price * cv.quantity
    }, 0)
    return total
  }
  updateOrdesM(id: any, dateEntry: any) {
    const time = this.date
    let minuteInMiliSeconds = 60000
    let datesInMiliSeconds = new Date(time).getTime() - new Date(dateEntry).getTime();
    let resultTime = (datesInMiliSeconds / minuteInMiliSeconds);
    console.log(datesInMiliSeconds)

    const ORDERS: Order = {
      status: 'Delivered',
      dateProcessed: time,
      time: resultTime
    };

    this.ordersServiceService.updateOrderService(id, ORDERS)
      .subscribe(respuesta => {
        console.log('Aqui', respuesta)
       
      })
    //   if(ORDERS.id){
    //     this.isButtonVisible = false
    //   }
    //  this.isButtonVisible
    // this.isButtonVisible = false
  }


}
