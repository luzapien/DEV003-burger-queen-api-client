import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'
import { KitchenComponent } from './kitchen/kitchen.component';
import { CounterComponent } from './counter/counter.component';
import { BillComponent } from './bill/bill.component';
import { NavComponent } from './nav/nav.component';
import { OrdersComponent } from './orders/orders.component';
import { CookieService } from 'ngx-cookie-service';
import { OrdersDeliveredComponent } from './orders-delivered/orders-delivered.component';
import { AdminComponent } from './admin/admin.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PagenotfoundComponent,
    KitchenComponent,
    CounterComponent,
    BillComponent,
    NavComponent,
    OrdersComponent,
    OrdersDeliveredComponent,
    AdminComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
