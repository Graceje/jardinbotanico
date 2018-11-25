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
    this.limpiar();
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
}
