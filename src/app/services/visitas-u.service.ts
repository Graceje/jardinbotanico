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
  altainst(inst) {
    return this._http.post('http://localhost/api-jardin/insert_institucion.php', JSON.stringify(inst));    
  }
  getinst(){
    return this._http.get('http://localhost/api-jardin/select_instituciones.php');
  }


}
