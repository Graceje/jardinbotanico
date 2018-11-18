import { Component, OnInit } from '@angular/core';
import {VisitasUService} from '../services/visitas-u.service';
@Component({
  selector: 'app-registroadmin',
  templateUrl: './registroadmin.component.html',
  styleUrls: ['./registroadmin.component.css']
})
export class RegistroadminComponent implements OnInit {
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
  constructor(private visitaUservice:VisitasUService ) { }

  ngOnInit() {
  }
  
  alta() {

    this.visitaUservice.alta(this.vis).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
       

      }
    });
  }
}
