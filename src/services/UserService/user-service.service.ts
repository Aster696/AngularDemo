import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users: any = [];
  constructor() { }
  
  public getUser(): any{
    this.users = [
      {id: 1, username: 'Aster', email: 'xxxx@gmail.com', password: 'aster'},
      {id: 2, username: 'Kedar', email: 'kedar@gmail.com', password: 'kedar'},
      {id: 3, username: 'Govind', email: 'govind@gmail.com', password: 'govind'},
      {id: 4, username: 'Raj', email: 'raj@gmail.com', password: 'raj'},
      {id: 5, username: 'Tranformer', email: 'tranformer@gmail.com', password: 'transformer'}
    ];
    return this.users;
  }
}
