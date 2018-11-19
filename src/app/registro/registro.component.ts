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
   vis={
     titulo:null,
     institucion:null,
     contacto:null,
     adultos:null,
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
   
  }
  alta() {

    this.visitasuService.alta(this.vis).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
       

      }
    });
  }

}
