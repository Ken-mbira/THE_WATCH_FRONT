import { Component, OnInit } from '@angular/core';

import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private accountService:AccountService) { }
  username:string;
  email:string;
  password:string;

  registerUser(){
    let form = new FormData()
    form.append('email',this.email)
    form.append('username',this.username)
    form.append('password',this.password)
    this.accountService.register(form)
  }

  ngOnInit(): void {
  }

}
