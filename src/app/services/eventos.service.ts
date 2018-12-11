import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { ContentType } from '@angular/http/src/enums';
@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(public _http:HttpClient) { }
  geteventos(){
    return this._http.get('http://machiwi.tech/api-jardin/select_eventos.php');
  }
  alta(eventos) {
    return this._http.post('http://localhost/api-jardin/insert_eventos.php', JSON.stringify(eventos));    
  }
  seleccione(ideventos:number){
    return this._http.post('http://machiwi.tech/api-jardin/seleccione_eventos.php',{'ideventos': ideventos});
  }
  modificacion(bailame) {
    return this._http.post('http://machiwi.tech/api-jardin/update_eventos.php', JSON.stringify(bailame));    
  }
  delete(ideventos:number) {
    return this._http.post('http://machiwi.tech/api-jardin/delete_eventos.php',{'ideventos':ideventos});
  }
  subirImagenAdmin(datos:FormData){
    return this._http.post('http://machiwi.tech/api-jardin/insert_imagen.php', datos);
  }
  mostrar(){
    return this._http.get('http://machiwi.tech/api-jardin/select_eventosIMG.php');

  }
}
