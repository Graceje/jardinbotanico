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
  @ViewChild('formpro2') formpro2: NgForm;
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
    tiempo1:null,
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
    let hora: string = (this.vis.tiempo.substring(0,2));
    let y: number; 
    y =+hora;
    y= y +1;
    if (y<10){
      hora = "0"+y;
    }else{
      hora = ""+y;
    }
  this.vis.tiempo1 = hora+this.vis.tiempo.substring(2);
  if(this.vis.mariposario != true){
    this.vis.mariposario=false;
  }
  if(this.vis.plantario != true){
    this.vis.plantario=false;
  }
  if(this.vis.Recinto_educativo != true){
    this.vis.Recinto_educativo=false;
  }
  if(this.vis.Jardin_tematico != true){
    this.vis.Jardin_tematico=false;
  }

    this.visitaUservice.altaadmin(this.vis).subscribe(datos => {
      if (datos['resultado'] ==='NOK') {
        alert("Hora y dia ocupado, intente de nuevo");
      }else {
        alert("Se registro visita");
      }
      /*if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.formpro.reset();
       

      }*/
    });
  
    this.formpro.reset();
    this.formpro2.reset();
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
