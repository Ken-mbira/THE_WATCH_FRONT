import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient,private snackBar:MatSnackBar,private route:Router) { }

  getProfile(){
    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
    })
    this.http.get(`${environment.BASE_URL}/profile`,{'headers':headers}).subscribe(response=>{
      console.log(response)  
    },error => {
      console.log(error)
    })
  }

  login(credentials:any){
    this.http.post(`${environment.BASE_URL}/login`,credentials).subscribe(response=>{
      sessionStorage.setItem('token',response['token'])
      this.snackBar.open(`Welcome back ${credentials.get('username')}`,"Thanks")
      this.route.navigate(['myhood'])
    },error=>{
      this.snackBar.open(`There was a problem logging you in, please check your credentials and try again.`)
    })
  }

  register(credentials:any){
    this.http.post(`${environment.BASE_URL}/users`,credentials).subscribe(response=>{
      this.snackBar.open(`Congratulations ${credentials.get('username')}, your account was successfully created.`,"Log in")
      this.route.navigate([''])
    },error => {
      this.snackBar.open("Im sorry, there was a problem created the account.")
    })
  }
}
