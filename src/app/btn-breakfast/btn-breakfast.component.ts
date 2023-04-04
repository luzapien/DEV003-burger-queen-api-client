import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-breakfast',
  templateUrl: './btn-breakfast.component.html',
  styleUrls: ['./btn-breakfast.component.css']
})
export class BtnBreakfastComponent {
  food:string = ''
  price:string = ''
  item:any= [{
    food:'sandwich',
    price:'$5.00',
  },
  {
    drinks:['coffee', 'Latte','Juice'],
    price:['$5.00','$6.00','$7.00']
  }
]
}
