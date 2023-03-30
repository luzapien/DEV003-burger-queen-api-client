import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  mostrar = false;
  mostrar2 = false;

breakfastProducts(){
  this.mostrar = true;
}

dinnerProducts(){
  this.mostrar2 = true;
}

}


