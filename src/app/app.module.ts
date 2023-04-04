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
import { AddNameComponent } from './add-name/add-name.component';
import { ListNameComponent } from './list-name/list-name.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { BtnBreakfastComponent } from './btn-breakfast/btn-breakfast.component';
import { BtnDinnerComponent } from './btn-dinner/btn-dinner.component';
import { CounterComponent } from './counter/counter.component';
import { BillComponent } from './bill/bill.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PagenotfoundComponent,
    AddNameComponent,
    ListNameComponent,
    KitchenComponent,
    BtnBreakfastComponent,
    BtnDinnerComponent,
    CounterComponent,
    BillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
