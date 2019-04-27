import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor(public _http:HttpClient) { }
  getpersonas(){
    return this._http.get('http://machiwi.tech/api-jardin/select_reporteCantidadper.php');
  }
  getareas(){
    return this._http.get('http://machiwi.tech/api-jardin/select_reporteCantidadareas.php');
  }
  getmeses(){
    return this._http.get('http://machiwi.tech/api-jardin/select_reporteCantidadmeses.php');

  }
  getinst(){
    return this._http.get('http://machiwi.tech/api-jardin/select_reporteCantidadinst.php');
  }
  getvisitadia(){
    return this._http.get('http://machiwi.tech/api-jardin/select_reportevisitadia.php');
  }
  getvisitames(mes: string){
    return this._http.post('http://machiwi.tech/api-jardin/select_reportevisitames.php', {'mes': mes}); 
  }
  getvisitano(ano: string){
    return this._http.post('http://machiwi.tech/api-jardin/select_reportevisitaaño.php', {'ano': ano}); 
  }
  getvisita(folio: string){
    return this._http.post('http://machiwi.tech/api-jardin/select_folioeventos.php', {'folio': folio}); 
  }
  geteventosdia(){
    return this._http.get('http://machiwi.tech/api-jardin/select_reporteEventodia.php');

  }
  geteventosmes(mes: string){
    return this._http.post('http://machiwi.tech/api-jardin/select_reporteEventomes.php', {'mes': mes}); 
  }
  geteventoano(ano: string){
    return this._http.post('http://machiwi.tech/api-jardin/select_reporteEventoaño.php', {'ano': ano}); 
  }
  get_inst(){

    return this._http.get('http://machiwi.tech/api-jardin/select_reporteinstituion.php');
  }

  calendario(){
    return this._http.get('http://machiwi.tech/api-jardin/select_visitas2.php');

  }
  calendario2(){
    return this._http.get('http://machiwi.tech/api-jardin/select_eventos2.php');

  }
  cantidadarea(){
    return this._http.get('http://machiwi.tech/api-jardin/reporte_eventoarea.php');

  }
  cantidadC(){
    return this._http.get('http://machiwi.tech/api-jardin/selec_reporteCantidadC.php');

  }
  correo(){
    return this._http.get('http://machiwi.tech/api-jardin/correo.php');

  }
  subirImagenAdmin(datos:FormData){
    return this._http.post('http://machiwi.tech/api-jardin/insert_multi.php', datos);
  }

  mostrar(folio: string){
    console.log("AQUI MERO");
    console.log(folio);
    return this._http.post('http://machiwi.tech/api-jardin/mostrar_img.php', {'folio': folio}); 
  }
 

}
