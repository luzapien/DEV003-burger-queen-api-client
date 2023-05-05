import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as Toastify from 'toastify-js';

@Injectable({
  providedIn: 'root'
})
export class BlockRoutesGuard implements CanActivate {
  state: boolean = false;

  constructor(
    private router: Router
  ) { }

  redirect(flag: boolean): any {
    if (!flag) {
      localStorage.clear();
      this.router.navigate(['/', 'login'])
      Toastify({
        text: ('Please log in with your credentials'),
        duration: 10000,
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

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const authGuard = localStorage.getItem('userRol')
    if (state.url === '/admin' && authGuard === 'admin') {
      return this.state = true;
    } else if (authGuard === 'admin' && state.url === '/home') {
      return this.state = true
    } else if (authGuard === 'admin' && state.url === '/kitchen') {
      return this.state = true
    } else if (state.url === '/home' && authGuard === 'server') {
      return this.state = true;
    } else if (state.url === '/kitchen' && authGuard === 'cook') {
      return this.state = true;
    } 
    this.redirect(this.state);
    return this.state = false;
  }
}
