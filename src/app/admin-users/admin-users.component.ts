import { Component } from '@angular/core';
import { OrdersServiceService } from 'src/app/servicios/orders.service.service';
import type { User} from 'src/types';
import { RequestService } from 'src/app/servicios/request.service';
@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent {
  constructor(
    public OrdersServiceService:OrdersServiceService,
    public requestService:RequestService,
  ){ this.getUsers()}

  users: Array<User> = []
  listaUsers: User | null = null
  modal:boolean=false
  userID!:any;
  currentUser: User | null = null
  

  ngOnInit(): void {
    this.obtainId();
  }
  
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
    this.requestService.deletePost(id, token)
      .subscribe(response => {
        console.log('producto eliminado:', response)
      });
  }

  newUser(value:User){
    // const token = localStorage.getItem('accessToken')
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
  // updateDataUsers(value: any) {
  //   if (this.currentProduct) {
  //     const PRODUCTS: Product = {
  //       name: value.name,
  //       price: value.price,
  //       type: value.type,
  //       dateEntry: this.date,
  //       id: this.currentProduct.id,
  //       image: value.image
  //     }
  //     const closeModalBtn = document.getElementById('closeModalBtn')
  //     this.ordersServiceService.updateProductService(this.currentProduct.id, PRODUCTS)
  //       .subscribe({
  //         next: (response) => {
  //           closeModalBtn?.click()
  //           this.onCloseModal()
  //           this.getProducts()
  //           console.log(response)
  //         }
  //       })
  //   }

  onShowModal(user: User | null) {
    this.currentUser = user
  }

  obtainId(){
    this. OrdersServiceService.disparador.subscribe(data => {
    this.userID = data.id
    });
  }
  userAdd(value:User){

    const USERS: User = {
        email: value.email,
        password: value.password,
        id: value.id,
        role: value.role,
    }

    if (this.userID !== undefined) {
      //Edit product
      this.OrdersServiceService.updateUsersService(this.userID.id, USERS).subscribe(
        data => {
          // this.userForm.reset();
          this.OrdersServiceService.update.emit({
            update: true,
          });
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
  }
}
