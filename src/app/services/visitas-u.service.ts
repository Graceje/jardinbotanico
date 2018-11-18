import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Visitas } from '../models/visitas';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VisitasUService {
 
  
  constructor(public _http:HttpClient) { }

  alta(usuarios) {
    return this._http.post('http://localhost/api-jardin/insert_visitas.php', JSON.stringify(usuarios));    
  }


}
