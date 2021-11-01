import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  login(credentials:any){
    this.http.post(`${environment.BASE_URL}/login`,credentials).subscribe(response=>{
      sessionStorage.setItem('token',response['token'])
      console.log(response['token'])
    },error=>{
      console.log(error)
    })
  }
}
