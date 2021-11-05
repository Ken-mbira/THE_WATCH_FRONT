import { Component, OnInit } from '@angular/core';

import { AccountService } from '../account.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hood',
  templateUrl: './hood.component.html',
  styleUrls: ['./hood.component.css']
})
export class HoodComponent implements OnInit {
  hood:any
  businesses:any;
  residents:any;
  occurences:any;
  cloudinaryUrl = environment.CLOUDINARY_URL

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.accountService.getProfile().subscribe(response => {
      this.hood = response['neighbourhood']
      
      this.accountService.getBusinesses(this.hood.id).subscribe(response => {
        this.businesses = response['businesses']
      },error => {
        console.log(error)
      })

      this.accountService.getResidents(this.hood.id).subscribe(response => {
        this.residents = response['users']
        console.log(this.residents)
      },error => {
        console.log(error)
      })

      this.accountService.getEvents(this.hood.id).subscribe(response =>{
        this.occurences = response
        console.log(this.occurences)
      },error => {
        console.log(error)
      })

    },error =>{
      console.log(error)
    })
  }

}
