import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  private search_term = new BehaviorSubject<string>("")
  current_term = this.search_term.asObservable();

  newSearch(term:string){
    this.search_term.next(term)
  }

  constructor() { }
}
