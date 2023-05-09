import { Component } from '@angular/core';
import { OrdersServiceService } from 'src/app/servicios/orders.service.service';
import type { User } from 'src/types';
import { RequestService } from 'src/app/servicios/request.service';
@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent {
  constructor(
    public OrdersServiceService: OrdersServiceService,
    public requestService: RequestService,
  ) { this.getUsers() }

  users: Array<User> = []
  listaUsers: User | null = null
  modal: boolean = false
  userID!: any;
  currentUser: User | null = null

  getUsers(): void {
    const token = localStorage.getItem('accessToken');
    this.OrdersServiceService.getUserService().subscribe({
      next: (response) => {
        console.log('estos son los usuarios', response)
        this.users = response

      }
    })
  }
  deleteUser(id: string) {
    const token = localStorage.getItem('accessToken');
    this.requestService.deletePostUser(id, token)
      .subscribe(response => {
        console.log('producto eliminado:', response)
      });
  }

  newUser(value: User) {
    const newUser: User = {
      email: value.email,
      password: value.password,
      id: value.id,
      role: value.role,

    };
    this.OrdersServiceService.postUsersService(newUser).subscribe({
      next: (response: User) => {
        console.log(response)
        this.getUsers()
      }
    })
  }
  onShowModal(user: User | null) {
    this.currentUser = user
  }

  userAdd(value: User) {

    let USERS: User = {
      email: value.email,
      password: value.password,
      id: value.id,
      role: value.role,
    }
    // console.log(this.currentUser);
    if (this.currentUser) {
      if (!value.password) {
        USERS = {
          email: value.email,
          role: value.role,
        }
      }
      //Edit product
      this.OrdersServiceService.updateUsersService(this.currentUser.id, USERS).subscribe(
        data => {
          this.OrdersServiceService.update.emit({
            update: true,
          });
          this.modal = false
        },
        error => {
          console.log(error);
        }
      );
    } else {
      //Creat product if id is defined
      this.OrdersServiceService.postUsersService(USERS).subscribe(
        data => {
          this.OrdersServiceService.update.emit({
            update: true,
          });
         
        },
        error => {
          console.log(error);
        }
        
      );
    }
    this.getUsers()
  
  }
  
}
