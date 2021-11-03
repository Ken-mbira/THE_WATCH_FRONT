import { Component, OnInit } from '@angular/core';

import { AccountService } from '../account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logout(){
    this.accountService.logout();
  }

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }

}
