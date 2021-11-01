import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  loginForm = this.fb.group({
    email : ['',Validators.compose([Validators.required,Validators.email])],
    password: ['',Validators.compose([Validators.required])],
    confirmPassword: ['',Validators.compose([Validators.required])] 
  })

  ngOnInit(): void {
  }

}
