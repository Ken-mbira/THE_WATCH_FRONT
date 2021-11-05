import { Component, OnInit } from '@angular/core';

import { BusinessService } from '../business.service';
import { AccountService } from '../account.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  searchTerm:string;

  businesses:any;
  cloudinaryUrl = environment.CLOUDINARY_URL

  constructor(private accountService:AccountService,private businessService:BusinessService) { }


  ngOnInit(): void {
    this.businessService.current_term.subscribe(term => this.searchTerm = term)

    this.accountService.searchBusiness(this.searchTerm).subscribe(response => {
      this.businesses = response['businesses']
      console.log(this.businesses)
    },error=>{
      console.log(error)
    })
  }

}
