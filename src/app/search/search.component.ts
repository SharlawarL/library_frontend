import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  data : any;
  constructor(
    private User: UserService, 
  ) { }

  ngOnInit() {
    this.getUser()
  }

  getUser(){
    console.log("User data")
    this.User.get('getUser').subscribe(res=>{  
      this.data = res
      console.log(res);
    })
  }

}
