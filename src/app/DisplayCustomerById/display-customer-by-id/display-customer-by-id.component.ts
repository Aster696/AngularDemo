import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CustomerServiceService } from 'src/services/CustomerService/customer-service.service';

@Component({
  selector: 'app-display-customer-by-id',
  templateUrl: './display-customer-by-id.component.html',
  styleUrls: ['./display-customer-by-id.component.css']
})
export class DisplayCustomerByIdComponent implements OnInit {

  custId: any;
  constructor(
              private _customerService: CustomerServiceService,
              private router: Router,
              private route: ActivatedRoute
              ) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe((param: ParamMap): void => {
    //   this.custId = (param.get('custId'));
    // });
    this._customerService.displayCustomerById(5).subscribe(data => (console.log(data)));
  }



}
