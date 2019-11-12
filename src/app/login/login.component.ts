import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  public loder = false;
  constructor(
    private User: UserService, 
    private router : Router
  ) { }

  ngOnInit() {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);
  loginFormControl = new FormControl('', [
    Validators.required
  ]);

  loginData(event: any){
    event.preventDefault()
    const target = event.target
    const typeData = target.querySelector('#type').value
    const emailData = target.querySelector('#email').value
    const passwordData = target.querySelector('#password').value
    let data = "email="+emailData+"&&password="+passwordData
    this.loder = true;
    if(typeData =='admin' && emailData == 'admin@gmail.com' && passwordData == 'admin')
    {
      this.router.navigate(['/Dashboard/Home'])
    }else{
      this.User.post('loginUser/',data).subscribe(data=>{
        if(data['success'])
        {
          console.log("success")
          localStorage.setItem('User',data['user_id'])
          this.router.navigate(['/UserHome'])
        }
        else
          console.log(data)
          this.email = data['email'];
          this.password = data['password'];
      });
    }
  }


}
