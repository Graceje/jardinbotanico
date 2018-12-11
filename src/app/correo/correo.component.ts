import { Component, OnInit , ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NotificacionesService} from '../services/notificaciones.service';
@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.css']
})

export class CorreoComponent implements OnInit {
pid;
@ViewChild('dataTable') table;
  dataTable: any;
  dtOptions: any;
  notis:{
    
    titulo:string,
    institucion:string,
    contacto:string,
    ninos:string,
    ninas:string,
    mujeres:string,
    hombres:string,
    telefono:string,
    correo:string,
    fecha:string,
    tiempo:string,
    tiempo1: string,
    plantario: boolean,
    mariposario:boolean,
    Recinto_educativo:boolean,
    Jardin_tematico:boolean
 
  } 

  constructor(
     private router: Router,
    private route: ActivatedRoute,
    private notificacionesservice: NotificacionesService ) { 
      this.getnotificacion();
    }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      "ajax": {
        url: 'http://machiwi.tech/api-jardin/select_visitas.php',
        type: 'GET'
         
      },
      columns: [
          {
            title: 'Titulo',
              data: 'titulo'
          },
          {
            title: 'Institución',
              data: 'institucion'
          },
          {
            title: 'Fecha',
              data: 'fecha'
          },
          {
            title: 'Hora',
              data: 'tiempo'
          }
      ],
     
  };
  this.dataTable = $(this.table.nativeElement);
  this.dataTable.DataTable(this.dtOptions);

    window.setInterval(()=>{
      if(this.pid != this.notificacionesservice.id){
        
      this.pid = this.notificacionesservice.id;
        this.getnotificacion();
      }
    },10);
      
  }
  
  modificacion() {
    let hora: string = (this.notis.tiempo.substring(0,2));
        let y: number; 
        y =+hora;
        y= y +1;
        if (y<10){
          hora = "0"+y;
        }else{
          hora = ""+y;
        }
      this.notis.tiempo1 = hora+this.notis.tiempo.substring(2);
      console.log(this.notis);
      if(this.notis.mariposario != true){
        this.notis.mariposario=false;
      }
      if(this.notis.plantario != true){
        this.notis.plantario=false;
      }
      if(this.notis.Recinto_educativo != true){
        this.notis.Recinto_educativo=false;
      }
      if(this.notis.Jardin_tematico != true){
        this.notis.Jardin_tematico=false;
      }
    this.notificacionesservice.modificacion(this.notis).subscribe(datos => {
      console.log("nosepuede");
      console.log(datos);
      if (datos['resultado'] =='NOK') {
        alert("Hora y dia ocupado, intente de nuevo");
      }else {
        alert("Se registro visita");
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
  public getnotificacion(){
    this.notis = {
        
      titulo:'',
      institucion:'',
      contacto:'',
      ninos:'',
      ninas:'',
      mujeres:'',
      hombres:'',
      telefono:'',
      correo:'',
      fecha:'',
      tiempo:'',
      tiempo1:' ',
      plantario: false,
      mariposario: false,
      Recinto_educativo: false,
      Jardin_tematico:false
    };
    
    
    this.notificacionesservice.notificacioness(this.pid)
      .subscribe((notisk:any) =>{
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
