import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NotificacionesService} from '../services/notificaciones.service';
@Component({
  selector: 'app-correoinstitucion',
  templateUrl: './correoinstitucion.component.html',
  styleUrls: ['./correoinstitucion.component.css']
})
export class CorreoinstitucionComponent implements OnInit {
  pid;
  notis:{
    idinstituciones:string,
    status:string,
    nombre:string,
    direccion:string,
    localidad:string,
    telefono:string,
    sector_educativo:string,
   
    
 
  } 
  constructor(private router: Router,
    private route: ActivatedRoute,
    private notificacionesservice: NotificacionesService) {
     
      this.pid=this.notificacionesservice.id;
      this.getnotificacion();
      console.log(this.pid);
     }

  ngOnInit() {
    window.setInterval(()=>{
      if(this.pid != this.notificacionesservice.id){
        
      this.pid = this.notificacionesservice.id;
        this.getnotificacion();
      }
    },10);
  }
  public getnotificacion(){
  
    
    this.notis={
      idinstituciones: ' ',
      status: ' ',
      nombre:' ',
      direccion: ' ',
      localidad: ' ',
      telefono:' ',
      sector_educativo:' ',
      
   
    } 
    this.notificacionesservice.notiess2(this.pid)
      .subscribe((notisk:any) =>{
        console.log(notisk);
        this.notis=notisk[0];
         
    
  });
  }
  delete() {
    this.notificacionesservice.delete2(this.notis).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        
      }
    });    
  }
  aceptado() {
    this.notificacionesservice.aceptado(this.notis).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        
      }
    });    
  }
}
