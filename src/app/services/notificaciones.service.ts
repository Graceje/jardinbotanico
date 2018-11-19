import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  constructor(public _http:HttpClient) { }

  notificaciones(){
    return this._http.get('http://localhost/api-jardin/select_notificacion.php');
  }
  notificacioness(id){
    return this._http.post('http://localhost/api-jardin/seleccione_notificacion.php/', {'id': id});
  }
  pendientes(){
    return this._http.get('http://localhost/api-jardin/pendientes_notificacion.php/');
  }
  modificacion(notis) {
    return this._http.post('http://localhost/api-jardin/update_notificacion.php', JSON.stringify(notis));    
  }
  delete(notis) {
    return this._http.post('http://localhost/api-jardin/delete_notificacion.php', JSON.stringify(notis));    
  }

}
