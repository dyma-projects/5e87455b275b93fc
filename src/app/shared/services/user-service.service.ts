import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public users: BehaviorSubject<string[]> = new BehaviorSubject([])

  addUser(username: string){
    this.users.value.push(username)
  }

  constructor() {}

}
