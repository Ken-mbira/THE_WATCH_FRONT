import { Component, OnInit } from '@angular/core';

import { AccountService } from '../account.service';
import { Neighbourhood } from '../neighbourhood';

@Component({
  selector: 'app-create-hood',
  templateUrl: './create-hood.component.html',
  styleUrls: ['./create-hood.component.css']
})
export class CreateHoodComponent implements OnInit {

  locations: any;
  newHood = new Neighbourhood("","","","","","")

  onImageChange(event: any){
    this.newHood.image = event.target.files[0]
  }

  createHood(){
    let form = new FormData()
    form.append("name",this.newHood.name)
    form.append("location",this.newHood.location)
    form.append("slogan",this.newHood.name)
    form.append("police_hotline",this.newHood.name)
    form.append("hospital_hotline",this.newHood.name)
    form.append("image",this.newHood.image,this.newHood.image.name)

    this.accountService.createHood(form)
  }

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.accountService.getLocations().subscribe(response=>{
      this.locations = response
    })
  }

}
