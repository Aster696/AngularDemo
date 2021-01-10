import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/User';

@Component({
  selector: 'app-user-model',
  templateUrl: './user-model.component.html',
  styleUrls: ['./user-model.component.css']
})
export class UserModelComponent implements OnInit{

public user: User = new User();

username: string  = '';
email: string  = '';
password: string  = '';

public colors = ['red', 'green', 'blue', 'gray'];

  // constructor() { }

  ngOnInit(): void {
  }

  UserData(): void{
    this.user = new User();

    this.user.username = this.username;
    this.user.email = this.email;
    this.user.password = this.password;
  }

}
