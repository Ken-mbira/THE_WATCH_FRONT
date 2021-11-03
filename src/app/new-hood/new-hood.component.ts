import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-hood',
  templateUrl: './new-hood.component.html',
  styleUrls: ['./new-hood.component.css']
})
export class NewHoodComponent implements OnInit {

  hoods:any

  constructor(private accountService:AccountService,private snackBar:MatSnackBar) { }

  joinHood(id:number){
    this.accountService.joinHood(id).subscribe(response => {
      this.snackBar.open("You have successfully joined the hood,","Congratulations")
      this.ngOnInit();
    },error=>{
      console.log(error)
    })

  }

  ngOnInit(): void {
    this.accountService.allHoods().subscribe(response => {
      this.hoods = response
    },error =>{
      console.log(error)
    })
  }

}
