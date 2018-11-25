import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor(public _http:HttpClient) { }
  getpersonas(){
    return this._http.get('http://localhost/api-jardin/select_reporteCantidadper.php');
  }
  getareas(){
    return this._http.get('http://localhost/api-jardin/select_reporteCantidadareas.php');
  }
  getmeses(){
    return this._http.get('http://localhost/api-jardin/select_reporteCantidadmeses.php');

  }
  getinst(){
    return this._http.get('http://localhost/api-jardin/select_reporteCantidadinst.php');
  }
  getvisitadia(){
    return this._http.get('http://localhost/api-jardin/select_reportevisitadia.php');
  }
  getvisitames(mes: string){
    return this._http.post('http://localhost/api-jardin/select_reportevisitames.php', {'mes': mes}); 
  }
  getvisitano(ano: string){
    return this._http.post('http://localhost/api-jardin/select_reportevisitaaño.php', {'ano': ano}); 
  }

  geteventosdia(){
    return this._http.get('http://localhost/api-jardin/select_reporteEventodia.php');

  }
  geteventosmes(mes: string){
    return this._http.post('http://localhost/api-jardin/select_reporteEventomes.php', {'mes': mes}); 
  }
  geteventoano(ano: string){
    return this._http.post('http://localhost/api-jardin/select_reporteEventoaño.php', {'ano': ano}); 
  }
  get_inst(){

    return this._http.get('http://localhost/api-jardin/select_reporteinstituion.php');
  }

  calendario(){
    return this._http.get('http://localhost/api-jardin/select_visitas.php');

  }
  calendario2(){
    return this._http.get('http://localhost/api-jardin/select_eventos2.php');

  }


}
