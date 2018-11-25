import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class Auth2Service {

  constructor(private router:Router) { }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('si entre');
    try {
      let cuerpo = localStorage.getItem('token');
      console.log(cuerpo);
      cuerpo = atob(cuerpo.split('.')[1]);
      console.log(cuerpo);
      cuerpo = JSON.parse(cuerpo);
      console.log(cuerpo);
      this.router.navigateByUrl('primera');
      return false;

    } catch (e) {
      
      return true;
     
     
    }
  }
}
