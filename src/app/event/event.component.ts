import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

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

  form = new FormData()

  @Output() formSubmitEvent = new EventEmitter<FormData>();

  postEvent(){
    this.form.append('type',this.event.type)
    this.form.append('name',this.event.name)
    this.form.append('description',this.event.description)
    this.form.append('image_description',this.event.image_description)

    this.formSubmitEvent.emit(this.form)
    this.event.type = ""
    this.event.name = ""
    this.event.description = ""
    this.event.image_description = ""
  }

  ngOnInit(): void {
    this.accountService.getEventTypes().subscribe(response =>{
      this.event_types = response;
    })
  }

}
