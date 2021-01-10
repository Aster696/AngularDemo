import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserServiceService } from 'src/services/UserService/user-service.service';
import { CustomerServiceService } from 'src/services/CustomerService/customer-service.service';
import { HttpClientModule } from '@angular/common/http';
import { DisplayCustomerByIdComponent } from './DisplayCustomerById/display-customer-by-id/display-customer-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserServiceService, CustomerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
