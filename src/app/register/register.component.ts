import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { User } from '../user';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user: User=new User();
form=new FormGroup({
  firstName:new FormControl('',Validators.required),
  LastName:new FormControl('',Validators.required),
  Email:new FormControl('',[Validators.required,Validators.email]),
  AadharNo:new FormControl('',[Validators.required,Validators.minLength(12),Validators.maxLength(12)]),
  PancardNo:new FormControl('',Validators.required),
  Address:new FormControl('',Validators.required),
  PhoneNo:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
  Password:new FormControl('',[Validators.required,Validators.minLength(6)]),
  
})
  constructor(private routes:Router) { }

  ngOnInit() {
  }
  onSubmit(){
    alert("userName :"+this.user.userName +"\nEmail :"+this.user.Email+"\nANo:" +this.user.ANo+ "\nPNo:"+this.user.PNo+"\nAddress:" +this.user.Address+"\nPhNo:"+this.user.PhNo+"\npassword"+this.user.password);
    this.routes.navigate(['/login']) 
  }
}
