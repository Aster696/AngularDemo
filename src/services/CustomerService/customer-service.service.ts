import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerModel } from 'src/models/CustomerModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  
  constructor(private http: HttpClient) { }

  displayCustomer(): Observable<CustomerModel[]>{
    const customer_url = 'http://localhost:8080/displayCust';
    return this.http.get<CustomerModel[]>(customer_url);
  }

  addCustomer(customer: CustomerModel): Observable<any>{
    const customer_url = 'http://localhost:8080/addCust';
    return this.http.post<any>(customer_url, customer);
  }

  displayCustomerById(custId: number): Observable<CustomerModel>{
    const customer_url = 'http://localhost:8080/diplayCustId/'+ custId;
    return this.http.get<CustomerModel>(customer_url);
  }

}
