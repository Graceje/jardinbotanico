import { Component, OnInit, ViewChild } from '@angular/core';
import {NotificacionesService} from '../services/notificaciones.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { NgForm} from '@angular/forms';
@Component({
  selector: 'app-headeradmin',
  templateUrl: './headeradmin.component.html',
  styleUrls: ['./headeradmin.component.css']
})
export class HeaderadminComponent implements OnInit {
  @ViewChild('formpro') formpro: NgForm;
  notis;
  sesion; 

  constructor(private _notificacionservice: NotificacionesService, private router: Router) { 
    this.sesion=localStorage.getItem("correo");
  
    
  }

  ngOnInit() {
    
    this._notificacionservice.pendientes().subscribe(result =>{ 
      
      this.notis = result;
      console.log("aqui");
      console.log(this.notis);

    });
    //this.notificacion();
    window.setInterval(()=>{
      console.log("ejecuta");
      this._notificacionservice.notificaciones().subscribe(result =>{ 
        this.notis=this.notis.concat(result);
        console.log(result);
      });  
    },10000);
  }

  recargar(id){
    this.router.navigateByUrl("/correo/"+id);
 
    location.reload();
    
  }
  cerrarsesion(){
    
    localStorage.removeItem("correo");
    
    localStorage.removeItem("token");
    this.router.navigateByUrl('login');
  }



}
