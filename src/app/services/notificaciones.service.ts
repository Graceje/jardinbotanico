import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
public id;

  constructor(public _http:HttpClient) { }

  notificaciones(){
    return this._http.get('http://machiwi.tech/api-jardin/select_notificacion.php');
  }
  notificacioness(id){
    return this._http.post('http://machiwi.tech/api-jardin/seleccione_notificacion.php/', {'id': id});
  }
  notiess2(id){
    return this._http.post('http://machiwi.tech/api-jardin/seleccione_notificacion2.php/', {'id': id});
  }
  pendientes(){
    return this._http.get('http://machiwi.tech/api-jardin/pendientes_notificacion.php/');
  }
  modificacion(notis) {
    return this._http.post('http://machiwi.tech/api-jardin/update_notificacion.php', JSON.stringify(notis));    
  }
  aceptado(notis) {
    return this._http.post('http://machiwi.tech/api-jardin/update_notificacion2.php', JSON.stringify(notis));    
  }
  delete(notis) {
    return this._http.post('http://machiwi.tech/api-jardin/delete_notificacion.php', JSON.stringify(notis));    
  }
  delete2(notis) {
    return this._http.post('http://machiwi.tech/api-jardin/delete_notificacion2.php', JSON.stringify(notis));    
  }
  notificaciones2(){
    return this._http.get('http://machiwi.tech/api-jardin/select_notificacion2.php');
  }
  pendientes2(){
    return this._http.get('http://machiwi.tech/api-jardin/pendientes_notificacion2.php/');
  }


}
