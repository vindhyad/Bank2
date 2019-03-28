import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form=new FormGroup({
  Name: new FormControl('',Validators.required),
  Password: new FormControl('',[Validators.required,Validators.minLength(6)]),

})
  constructor(private routes:Router ) { }

  ngOnInit() {
  }
onSubmit(){
  this.routes.navigate(['/operation'])
}
}
