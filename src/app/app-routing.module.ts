import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
import { AdminComponent } from './admin/admin.component';
import { ModalComponent } from './modal/modal.component';


const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'home', 
  component: HomeComponent,
},
{
  path: 'kitchen',
  component: KitchenComponent
},
{
  path: 'admin',
 component: AdminComponent
},
{
  path: 'modal',
 component: ModalComponent
},
{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},
{
  path: '**',
  component: PagenotfoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
