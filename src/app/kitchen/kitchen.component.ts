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
  public isButtonVisible = true;


  constructor(
    private ordersServiceService: OrdersServiceService,
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

  updateOrdesM(id: any, dateEntry: any) {
    const time = this.date
    let minuteInMiliSeconds = 60000
    let datesInMiliSeconds = new Date(time).getTime() - new Date(dateEntry).getTime();
    let resultTime = (datesInMiliSeconds / minuteInMiliSeconds);
    console.log(datesInMiliSeconds)

    const ORDERS: Order = {
      status: 'Cooked',
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
