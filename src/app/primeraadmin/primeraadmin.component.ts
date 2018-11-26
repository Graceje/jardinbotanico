import { Component, OnInit, ViewChild } from '@angular/core';
import { EventosService } from '../services/eventos.service';
import { HttpClient } from '@angular/common/http';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-primeraadmin',
  templateUrl: './primeraadmin.component.html',
  styleUrls: ['./primeraadmin.component.css']
})
export class PrimeraadminComponent implements OnInit {
  @ViewChild('formpro') formpro: NgForm;
  @ViewChild('xd') xd: HTMLFormElement;
  bailame=null;
  loader:Boolean = false;
  events={
    ideventos:null,
    titulo:null,
    fecha:null,
    tiempo:null,
    tiempo1:null,
    descripcion:null,
    imagen:null,

  }
 
  constructor( private eventosservice: EventosService) {
  
   }

  ngOnInit() {
    this.geteventos();

  }

  geteventos(){
    this.eventosservice.geteventos().subscribe(result => this.bailame = result);
  }
  alta() {
    let hora: string = (this.events.tiempo.substring(0,2));
        let y: number; 
        y =+hora;
        y= y +1;
        if (y<10){
          hora = "0"+y;
        }else{
          hora = ""+y;
        }
      this.events.tiempo1 = hora+this.events.tiempo.substring(2);
     
    console.log(this.events),
    this.eventosservice.alta(this.events).subscribe(datos => {
      console.log("ya");
      if (datos.resultado ==='NOK') {
        alert("Hora y dia ocupado, intente de nuevo");
      }else {
        alert("Se registro evento");
      }
    });
    this.geteventos();
    this.formpro.reset();
  }
  seleccione(ideventos) {
    this.eventosservice.seleccione(ideventos).subscribe(result => this.events = result[0]);
    
  }
  limpiar(){
    this.events= {
      ideventos:' ',
      titulo:' ',
      fecha:' ',
      tiempo:' ',
      tiempo1:' ',
      descripcion:' ',
      imagen:null,
    }
  }
  
  modificacion() {
    this.eventosservice.modificacion(this.events).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.geteventos();
      }
    });   
  
  }
  delete(ideventos) {
    
    this.eventosservice.delete(ideventos).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.geteventos();
      }
    });
  }
  public cargandoImagen(e){
    let img:any = e.target;
    if(img.files.length > 0){

      let form = new FormData(this.xd);
      console.log(form);
      this.eventosservice.subirImagenAdmin(form).subscribe( datos => {
        if (datos['resultado']=='OK') {
          console.log("subio_imagen");
         
        }
      });
    }
  }
}
