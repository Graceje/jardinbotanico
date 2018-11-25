import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms/src/directives/ng_form';
import { LoginserviceService } from '../loginservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log={
   
    correo:null,
    pass:null
  }
  toki; 
  constructor(private logingservice: LoginserviceService, private routs:Router) {
    this.toki = { token: '' };
   }

  ngOnInit() {
  }
  login(){
    
    this.logingservice.login(this.log.correo,this.log.pass).subscribe( result =>{
      console.log('amos');
      this.toki = result;
      
      console.log(this.toki);
      if(this.toki == null){
        alert("Error, Intente de nuevo");

      }else{
        
        localStorage.setItem("correo",this.log.correo);
        localStorage.setItem('token' , this.toki.token);
        
        this.routs.navigateByUrl('primera');

      };
     
    });
  }


}
