import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NotificacionesService} from '../services/notificaciones.service';
@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.css']
})

export class CorreoComponent implements OnInit {

  notis:{
    
    titulo:string,
    institucion:string,
    contacto:string,
    adultos:string,
    telefono:string,
    correo:string,
    fecha:string,
    tiempo:string,
    plantario: boolean,
    mariposario:boolean,
    Recinto_educativo:boolean,
    Jardin_tematico:boolean
 
  } 

  constructor(
     private router: Router,
    private route: ActivatedRoute,
    private notificacionesservice: NotificacionesService ) { 
 
    }

  ngOnInit() {
      this.getnotificacion();
      
  }
  
  modificacion() {
    this.notificacionesservice.modificacion(this.notis).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        
      }
    });    
  }
  delete() {
    this.notificacionesservice.delete(this.notis).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        
      }
    });    
  }
  getnotificacion(){
    this.notis = {
        
      titulo:'',
      institucion:'',
      contacto:'',
      adultos:'',
      telefono:'',
      correo:'',
      fecha:'',
      tiempo:'',
      plantario: false,
      mariposario: false,
      Recinto_educativo: false,
      Jardin_tematico:false
    };
    var id = this.route.snapshot.params['id'];
    this.notificacionesservice.notificacioness(id)
      .subscribe(notisk =>{
        console.log(notisk);
          this.notis = notisk[0];
          for (let i = 1; i < notisk.length+1; i++) {
            const element = notisk[i];
            if (element){
              console.log(element.nombre)
              if(element.nombre == 'jardin tematico '){
                this.notis.Jardin_tematico=true;
              } else if(element.nombre == 'plantario'){
                this.notis.plantario=true;
              }else if(element.nombre == 'mariposario'){
                this.notis.mariposario=true;
              }else if(element.nombre == 'recinto educativo'){
                this.notis.Recinto_educativo=true;
              }
            }
            
          }
  });
  }

}
