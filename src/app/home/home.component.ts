import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private requestService: RequestService,
    private router: Router
  ) {

  }
  getProducts() {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…IyIn0.q4GXdrPlGx7IzBM3wyhQhtS4QZoShG5b-91wkKTjJCM'
    this.requestService.productsRequest(token).subscribe({
      next:(response) => {
        console.log(response)
      }
    })
  }
}
