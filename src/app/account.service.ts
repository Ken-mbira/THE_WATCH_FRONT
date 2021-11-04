import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient,private snackBar:MatSnackBar,private route:Router) { }

  getProfile(){
    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
    })
    return this.http.get(`${environment.BASE_URL}/hood/myhood`,{'headers':headers})
  }

  allHoods(){
    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
    })
    return this.http.get(`${environment.BASE_URL}/hood/`,{"headers":headers})
  }

  joinHood(id:number){
    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
    })
    return this.http.post(`${environment.BASE_URL}/hood/join_hood/${id}`,id,{"headers":headers})

  }


  moveOut(){
    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
    })
    this.http.post(`${environment.BASE_URL}/hood/move_out/`,1,{"headers":headers}).subscribe(response => {
      this.snackBar.open("You are now no longer a member of the neighbourhood","See you",{duration:3000})
    })
  }

  login(credentials:any){
    this.http.post(`${environment.BASE_URL}/login`,credentials).subscribe(response=>{
      sessionStorage.setItem('token',response['token'])
      this.snackBar.open(`Welcome back ${credentials.get('username')}`,"Thanks")
      this.route.navigate(['myhood'])
    },error=>{
      this.snackBar.open(`There was a problem logging you in, please check your credentials and try again.`,"Sorry!",{duration:3000})
    })
  }

  register(credentials:any){
    this.http.post(`${environment.BASE_URL}/register`,credentials).subscribe(response=>{
      this.snackBar.open(`Congratulations ${credentials.get('username')}, your account was successfully created.`,"Log in",{duration:3000})
      this.route.navigate([''])
    },error => {
      this.snackBar.open("Im sorry, there was a problem created the account.")
    })
  }

  logout(){
    sessionStorage.removeItem('token')
  }

  getLocations(){
    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
    })
    return this.http.get(`${environment.BASE_URL}/hood/locations/`,{"headers":headers})
  }

  createHood(hood:any){
    let headers = new HttpHeaders({
    'Authorization':`Token ${sessionStorage.getItem('token')}`
    })
   this.http.post(`${environment.BASE_URL}/hood/`,hood,{"headers":headers}).subscribe(response => {
     this.snackBar.open("Congratulations, the neighbourhood was created successfully!","Thank you",{duration:3000})
   })
  }

  getBusinesses(pk){
    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
      })
     return this.http.get(`${environment.BASE_URL}/hood/business/${pk}`,{"headers":headers})
  }

  getResidents(pk){
    let headers = new HttpHeaders({
      'Authorization':`Token ${sessionStorage.getItem('token')}`
      })
     return this.http.get(`${environment.BASE_URL}/hood/myhood/${pk}`,{"headers":headers})
  }
}
