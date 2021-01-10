import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './AddCustomer/add-customer/add-customer.component';
import { AppComponent } from './app.component';
import { EmployeListComponent } from './Components/EmployeList/employe-list/employe-list.component';
import { DisplayCustomerByIdComponent } from './DisplayCustomerById/display-customer-by-id/display-customer-by-id.component';
import { DisplayCustomerComponent } from './DisplayCustomers/display-customer/display-customer.component';
import { DisplayUserComponent } from './DisplayUser/display-user/display-user.component';
import { PageNotFoundComponent } from './PageNotFound/page-not-found/page-not-found.component';
import { UserDetailsComponent } from './UserDetails/user-details/user-details.component';
import { UserModelComponent } from './UserModel/user-model/user-model.component';

const routes: Routes = [
  {path: 'displayCustomers', component: DisplayCustomerComponent},
  {path: 'add-customer', component: AddCustomerComponent},
  {path: 'displayCustomer/:custId', component: DisplayCustomerByIdComponent},
  {path: 'userModel', component: UserModelComponent},
  {path: 'displayUsers', component: DisplayUserComponent},
  {path: 'displayUser/:id', component: UserDetailsComponent},
  {path: 'employeList', component: EmployeListComponent},
  {path: '', redirectTo: '/employeList', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
                                DisplayCustomerComponent, AddCustomerComponent,
                                DisplayCustomerByIdComponent, UserModelComponent,
                                DisplayUserComponent, UserDetailsComponent,
                                EmployeListComponent, PageNotFoundComponent
                                ];
