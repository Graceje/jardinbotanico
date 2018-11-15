import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms/src/directives/ng_form';
import { LoginserviceService } from '../loginservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;
  password;
  constructor(private logingservice: LoginserviceService) {
    this.email='';
    this.password='';
   }

  ngOnInit() {
  }

  iniciar(){
  
    
  }

}
