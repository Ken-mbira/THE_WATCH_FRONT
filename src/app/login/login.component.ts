import { Component, OnInit, ɵgetComponentViewDefinitionFactory } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms'

import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService:AccountService) { }

  email: string;
  password: string;

  loginUser(){
    let form = new FormData();
    form.append('username',this.email)
    form.append('password',this.password)
    this.accountService.login(form)
  }

  ngOnInit(): void {
  }

}
