import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NotificacionesService} from '../services/notificaciones.service';
@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.css']
})

export class CorreoComponent implements OnInit {
  
  

  constructor(
     private router: Router,
    private route: ActivatedRoute,
    private notificacionesservice: NotificacionesService ) { }

  ngOnInit() {
      this.getnotificacion();
  }
  notis;
  getnotificacion(){
    var id = this.route.snapshot.params['id'];
    this.notificacionesservice.notificacioness(id)
      .subscribe(notis =>{
          this.notis = notis[0];
          })
  };

}
