import { Component, OnInit } from '@angular/core';
import { EventosService } from '../services/eventos.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-primeraadmin',
  templateUrl: './primeraadmin.component.html',
  styleUrls: ['./primeraadmin.component.css']
})
export class PrimeraadminComponent implements OnInit {
  eventos=null;
  events={
 
    titulo:null,
    fecha:null,
    tiempo:null,
    descripcion:null,
    imagen:null,

  }
  constructor( private eventosservice: EventosService) {
  
   }

  ngOnInit() {
  }
  
  alta() {
    console.log(this.events),
    this.eventosservice.alta(this.events).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        

      }
    });
  }
}
