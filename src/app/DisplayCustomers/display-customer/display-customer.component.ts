import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerModel } from 'src/models/CustomerModel';
import { CustomerServiceService } from 'src/services/CustomerService/customer-service.service';

@Component({
  selector: 'app-display-customer',
  templateUrl: './display-customer.component.html',
  styleUrls: ['./display-customer.component.css']
})
export class DisplayCustomerComponent implements OnInit {

  customer: CustomerModel[];
  constructor(private customerService: CustomerServiceService, private router: Router) { }

  ngOnInit(): void {
    this.customerService.displayCustomer().subscribe(data => this.customer = data, error => console.log(error));
    // console.log();
  }

  displayCustomer(customers: any): void{
    this.router.navigate(['/displayCustomer', customers.custId]);
  }

}
