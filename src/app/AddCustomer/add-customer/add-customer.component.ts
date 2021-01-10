import { Component, OnInit } from '@angular/core';
import { CustomerModel } from 'src/models/CustomerModel';
import { CustomerServiceService } from 'src/services/CustomerService/customer-service.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  public customer = new CustomerModel();
  constructor(private customerService: CustomerServiceService) { }

  ngOnInit(): void {
  }

  Save(): void{
    this.customerService
    .addCustomer(this.customer)
    .subscribe(
              data => {console.log(data); alert('Customer added successfully'); },
              error => console.log(error)
              );
  }

}
