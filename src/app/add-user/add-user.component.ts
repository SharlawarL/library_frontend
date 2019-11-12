import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  firstname: string;
  lastname : string;
  mobile : string;
  email : string;
  password : string;
  passwordcc : string;


  constructor(
    private User: UserService, 
    private router : Router
  ) { }

  ngOnInit() {
  }

  firstnameFormControl = new FormControl('', [
    Validators.required
  ]);

  lastnameFormControl = new FormControl('', [
    Validators.required
  ]);

  mobileFormControl = new FormControl('', [
    Validators.required
  ]);

  emailFormControl = new FormControl('', [
    Validators.required
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  passwordccFormControl = new FormControl('', [
    Validators.required
  ]);

  userData(event: any){
    event.preventDefault()
    const target = event.target
    let data = "firstname="+target.querySelector('#firstname').value+"&&lastname="+target.querySelector('#lastname').value+"&&mobile="+target.querySelector('#mobile').value+"&&email="+target.querySelector('#email').value+"&&password="+target.querySelector('#password').value+"&&passwordcc="+target.querySelector('#passwordcc').value+"&&status=0"
    console.log(event)
    this.User.post('addUser/',data).subscribe(data=>{
      if(data['success'])
      {
        console.log("success")
        this.router.navigate(['/Dashboard/User'])
      }
      else
        console.log(data)
        this.firstname = data['firstname'];
        this.lastname = data['lastname'];
        this.mobile = data['mobile'];
        this.email = data['email']
        this.password = data['password'];
        this.passwordcc = data['passwordcc'];
    });
  }

}
