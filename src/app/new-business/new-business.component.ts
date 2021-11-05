import { Component, OnInit,Output,EventEmitter } from '@angular/core';

import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-business',
  templateUrl: './new-business.component.html',
  styleUrls: ['./new-business.component.css']
})
export class NewBusinessComponent implements OnInit {

  services:any;

  chosenService:any;
  name:any;
  image:any;

  onImageChange(event:any){
    this.image = event.target.files[0]
  }

  @Output() formSubmitEvent = new EventEmitter<FormData>();

  form = new FormData();
  registerBusiness(){
    this.form.append('name',this.name)
    this.form.append('image',this.image)
    this.form.append('services',this.chosenService)

    this.formSubmitEvent.emit(this.form)
  }

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.accountService.getServices().subscribe(response => {
      this.services = response
    },error=>{
      console.log(error)
    })
  }

}
