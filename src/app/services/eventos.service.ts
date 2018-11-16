import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(public _http:HttpClient) { }
  getarea(){
    return this._http.get('http://localhost/api-jardin/select.php');
  }
  alta(eventos) {
    return this._http.post('http://localhost/api-jardin/insert_eventos.php', JSON.stringify(eventos));    
  }

}
