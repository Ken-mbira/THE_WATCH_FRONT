import { Component, OnInit } from '@angular/core';

import { AccountService } from '../account.service';

@Component({
  selector: 'app-hood',
  templateUrl: './hood.component.html',
  styleUrls: ['./hood.component.css']
})
export class HoodComponent implements OnInit {
  hasProfile: boolean;
  profile:any

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.accountService.getProfile().subscribe(response => {
      this.profile = response
      this.hasProfile = true
    },error =>{
      console.log(error)
    })
  }

}
