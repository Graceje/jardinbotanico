import { Component, OnInit } from '@angular/core';
import { EventosService } from '../services/eventos.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-primeraadmin',
  templateUrl: './primeraadmin.component.html',
  styleUrls: ['./primeraadmin.component.css']
})
export class PrimeraadminComponent implements OnInit {
  bailame=null;
  events={
    ideventos:null,
    titulo:null,
    fecha:null,
    tiempo:null,
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
 
    console.log(this.events),
    this.eventosservice.alta(this.events).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.geteventos();
      }
    });
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
      descripcion:' ',
      imagen:' ',
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
}
