import { Component, OnInit } from '@angular/core';
import {NotificacionesService} from '../services/notificaciones.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-headeradmin',
  templateUrl: './headeradmin.component.html',
  styleUrls: ['./headeradmin.component.css']
})
export class HeaderadminComponent implements OnInit {
  notis;
  constructor(private _notificacionservice: NotificacionesService, private router: Router) { 
   
  }

  ngOnInit() {
    this._notificacionservice.pendientes().subscribe(result =>{ 
      this.notis = result;
      console.log(this.notis);

    });
    //this.notificacion();
    window.setInterval(()=>{
      console.log("ejecuta");
      this._notificacionservice.notificaciones().subscribe(result =>{ 
        this.notis=this.notis.concat(result);
        console.log(result);
      });  
    },60000);
  }



}
