import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(public _http:HttpClient) {
 
  }
  login( correo:string, pass:string,){
    return this._http.post('http://localhost/api-jardin/login.php',{'correo':correo, 'pass':pass});   
  }
  

}
