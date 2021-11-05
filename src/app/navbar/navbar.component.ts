import { Component, OnInit } from '@angular/core';

import { AccountService } from '../account.service';
import { AuthService } from '../auth.service';
import { BusinessService } from '../business.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuthenticated:boolean;
  searchTerm: string

  search_item(){
    this.route.navigate(['business']);
    this.businessService.newSearch(this.searchTerm)
  }

  logout(){
    this.accountService.logout();
  }

  move_out(){
    this.accountService.moveOut();
  }

  constructor(private accountService:AccountService,private authService:AuthService,private businessService:BusinessService,private route:Router) { }

  ngOnInit(): void {
    this.authService.currentStatus.subscribe(status => this.isAuthenticated = status)

    this.businessService.current_term.subscribe(term => this.searchTerm = term)
  }

}
