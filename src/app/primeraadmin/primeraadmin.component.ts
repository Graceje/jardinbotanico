import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { EventosService } from '../services/eventos.service';
import { HttpClient } from '@angular/common/http';
import { NgForm} from '@angular/forms';


@Component({
  selector: 'app-primeraadmin',
  templateUrl: './primeraadmin.component.html',
  styleUrls: ['./primeraadmin.component.css']
})
export class PrimeraadminComponent implements OnInit {
  @ViewChild('formpro') formpro: NgForm;
  @ViewChild('xd') xd: HTMLFormElement;
  bailame=null;
  dataTable: any;
  loader:Boolean = false;
  events={
    ideventos:null,
    titulo:null,
    fecha:null,
    tiempo:null,
    tiempo1:null,
    area:null,
    categoria:null,
    descripcion:null,
    imagen:null,

  }
 
  constructor( private eventosservice: EventosService, private ref: ChangeDetectorRef) {
   this.geteventos();
   }

  ngOnInit() {
    this.geteventos();

  }

  geteventos(){
    this.eventosservice.geteventos().subscribe((result:any)=> {
      this.bailame = result;
      this.ref.detectChanges();
      const table: any = $('table');
      this.dataTable = table.dataTable();
    }
      );
  }
  alta() {
    let hora: string = (this.events.tiempo.substring(0,2));
        let y: number; 
        y =+hora;
        y= y +1;
        if (y<10){
          hora = "0"+y;
        }else{
          hora = ""+y;
        }
      this.events.tiempo1 = hora+this.events.tiempo.substring(2);
     
    console.log(this.events);
    let img:any = this.ya;
    if(img.files.length > 0){
      let xxd = new FormData();
      xxd.set('file', img.files[0]);
      let proof: any = this.events;
      this.eventosservice.subirImagenAdmin(xxd).subscribe( datos => {
        if (datos['resultado']=='OK') {
          console.log("JALO");
          console.log(datos);
          proof.imagen= datos['nombre'];
          console.log(proof);
          this.eventosservice.alta(proof).subscribe(datos => {
            
            console.log("ya");
            if (datos['resultado'] =='NOK') {
              alert("Hora y dia ocupado, intente de nuevo");
            }else {
              alert("Se registro evento");
            }
          });
          this.geteventos();
    this.formpro.reset();
        } else {
          console.log("NO JALO");
        }
      });
    }else{
      alert("no a ingresado imagen");
    }
 
    
  

  }




  seleccione(ideventos) {
    this.eventosservice.seleccione(ideventos).subscribe(result => this.events = result[0]);
    
  }
  limpiar(){
    this.events= {
      ideventos:' ',
      titulo:' ',
      fecha:' ',
      tiempo:' ',
      tiempo1:' ',
      categoria: ' ',
      area: ' ',
      descripcion:' ',
      imagen:null,
    }
  }
  
  modificacion() {
    this.eventosservice.modificacion(this.events).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.geteventos();
      }
    });   
  
  }
  delete(ideventos) {
    
    this.eventosservice.delete(ideventos).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.geteventos();
      }
    });
  }

  ya:any;
  public cargandoImagen(e){
    this.ya = e.target;

   

    
  }
}
