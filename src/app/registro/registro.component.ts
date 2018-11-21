import { Component, OnInit } from '@angular/core';
import { Visitas } from '../models/visitas';
import { VisitasUService} from '../services/visitas-u.service';
import {NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
   visita=null;
   inst=null;
   in= {
     nombre:null,
     direccion:null,
     localidad:null,
     sector_educativo:null,
   }
   vis={
     titulo:null,
     institucion:null,
     contacto:null,
     ninos:null,
     ninas:null,
     mujeres:null,
     hombres:null,
     telefono:null,
     correo:null,
     fecha:null,
     tiempo:null,
   
     plantario:null,
     mariposario:null,
     Jardin_tematico : null,
     Recinto_educativo: null,
     

 
 
   }
  constructor(private visitasuService: VisitasUService) {
   
   }

  ngOnInit() {
    this.geteventos();

   
  }
  alta() {

    this.visitasuService.alta(this.vis).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
       

      }
    });
    this.vis={
      titulo:' ',
      institucion:' ',
      contacto:' ',
      ninos:' ',
      ninas: ' ',
      telefono:' ',
      correo:' ',
      fecha:' ',
      tiempo:' ',
      plantario:false,
      mariposario:false,
      Jardin_tematico : false,
      Recinto_educativo: false,
      mujeres: ' ',
      hombres: ' ',
  
  
    }
  }
  altainst() {

    this.visitasuService.altainst(this.in).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.geteventos();
     
       
       

      }
    });
    this.in= {
      nombre:' ',
      direccion:' ',
      localidad:' ',
      sector_educativo:' ',
    }
  }
  geteventos(){
    this.visitasuService.getinst().subscribe(result => this.inst = result);
  }

}
