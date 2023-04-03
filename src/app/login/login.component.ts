import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { RequestService } from '../request.service';
import * as Toastify from 'toastify-js';
@Component({
  selector: 'app-login',// detalle de una persona 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private requestService: RequestService,
    private router: Router
  ) {

  }

  get email() {
    return this.formUser.get('email') as FormControl;
  }

  get password() {
    return this.formUser.get('password') as FormControl;
  }

  formUser = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  faSpinner = faSpinner;

  isFormLoading: boolean = false
  message: string = ""

  createPostos(): void {
    this.isFormLoading = true
    const { value } = this.formUser
    this.requestService.postRequest(value).subscribe({
      next: (response) => {
        console.log(response)
        this.router.navigate(['home'])
      },
      error: (error) => {
        console.log(error)
        if (error.status === 400){
          this.showError("Please,verify your Email and Password")
        }
       
        this.isFormLoading = false
      }
    });
  }
  showError(message:string): void {
    Toastify({
      text: message,
      duration: 5000,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "#dc3545",
      }
    }).showToast();
  }
}
