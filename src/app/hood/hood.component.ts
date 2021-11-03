import { Component, OnInit } from '@angular/core';

import { AccountService } from '../account.service';

@Component({
  selector: 'app-hood',
  templateUrl: './hood.component.html',
  styleUrls: ['./hood.component.css']
})
export class HoodComponent implements OnInit {
  hood:any

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.accountService.getProfile().subscribe(response => {
      this.hood = response['neighbourhood']
    },error =>{
      console.log(error)
    })
  }

}
