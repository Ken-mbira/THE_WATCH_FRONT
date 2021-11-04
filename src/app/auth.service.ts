import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authCheck(){
    if (sessionStorage.getItem('token')){
      return true;
    }
    else{
      return false;
    }
  }

  isAuthenticated:boolean = this.authCheck()
  
  private authStatus = new BehaviorSubject<boolean>(this.isAuthenticated)

  currentStatus = this.authStatus.asObservable();

  authentication(wildCard:boolean){
    this.authStatus.next(this.authCheck())
  }

  constructor() { }
}
