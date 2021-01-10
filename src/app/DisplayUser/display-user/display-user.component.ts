import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserServiceService } from 'src/services/UserService/user-service.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {

  public users: any = [];
  // tslint:disable-next-line:variable-name
  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit(): void {
    this.users = this.userService.getUser();
  }

  displayUser(user: any): void{
    this.router.navigate(['/displayUser', user.id]);
  }

}
