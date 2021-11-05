import { Component, OnInit , Input} from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { AccountService } from '../account.service';
import { Event } from '../event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private accountService:AccountService, private snackBar:MatSnackBar) { }

  event = new Event("","","","")

  onImageChange(event:any){
    this.event.image_description = event.target.files[0]
  }

  @Input () hood:any;
  eventType:any;

  event_types:any;

  postEvent(){
    let form = new FormData()
    form.append('type',this.event.type)
    form.append('name',this.event.name)
    form.append('description',this.event.description)
    form.append('image_description',this.event.image_description)

    this.accountService.postEvent(form,this.hood['id']).subscribe(response => {
      this.snackBar.open("Congratulations, the event was posted successfully!","Thank you",{duration:3000})
      this.event.name = ""
      this.event.description = ""
      this.event.image_description = ""
      this.event.type=""
    },error => {
     this.snackBar.open("There was a problem posting the event","Sorry",{duration:3000})
    })
  }

  ngOnInit(): void {
    this.accountService.getEventTypes().subscribe(response =>{
      this.event_types = response;
    })
  }

}
