import { Component, OnInit, ViewChild } from '@angular/core';
import {VisitasUService} from '../services/visitas-u.service';
import { NgForm} from '@angular/forms';
@Component({
  selector: 'app-registroadmin',
  templateUrl: './registroadmin.component.html',
  styleUrls: ['./registroadmin.component.css']
})
export class RegistroadminComponent implements OnInit {
  @ViewChild('formpro') formpro: NgForm;
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
  constructor(private visitaUservice:VisitasUService ) { }

  ngOnInit() {
    this.geteventos();
  }
  
  alta() {

    this.visitaUservice.altaadmin(this.vis).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.formpro.reset();
       

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

    this.visitaUservice.altainst(this.in).subscribe(datos => {
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
    this.visitaUservice.getinst().subscribe(result => this.inst = result);
  }

}
