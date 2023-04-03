import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
import { BtnDinnerComponent } from './btn-dinner/btn-dinner.component';
import { BtnBreakfastComponent } from './btn-breakfast/btn-breakfast.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'home', component: HomeComponent,
  children: [{
    path: 'dinner',
    component: BtnDinnerComponent
  },
  {
    path: 'breakfast',
    component: BtnBreakfastComponent
  }]
},
{
  path: 'kitchen',
  component: KitchenComponent
},
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
// {
//   path: '',
//   redirectTo: '/kitchen',
//   pathMatch: 'full'
// },
{
  path: '**',
  component: PagenotfoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
