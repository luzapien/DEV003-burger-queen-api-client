import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';
import { BtnBreakfastComponent } from '../btn-breakfast/btn-breakfast.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{ 
  constructor(
    private requestService: RequestService,
    private router: Router
  ){}
  getProducts() {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…IyIn0.q4GXdrPlGx7IzBM3wyhQhtS4QZoShG5b-91wkKTjJCM'
    this.requestService.productsRequest(token).subscribe({
      next:(response) => {
        console.log(response)
      }
    })
  }

  public receipt:Array<any> =[]
  ngOnInit(): void {
    this.receipt=[
    {
      title:'double burguer',
      subtitle:'Price 15.00'
    },
  ]
}
  mostrar = false;
  mostrar2 = false;

breakfastProducts(){
  this.mostrar = true;
}

dinnerProducts(){
  this.mostrar2 = true;
}


  }
