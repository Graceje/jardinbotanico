import { Component, OnInit, ViewChild } from '@angular/core';
import {ReportesService } from '../services/reportes.service';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas'; 
@Component({
  selector: 'app-reportevidencia',
  templateUrl: './reportevidencia.component.html',
  styleUrls: ['./reportevidencia.component.css']
})
export class ReportevidenciaComponent implements OnInit {

  ms;
  bailar2=null;
  bailame=null;
  
  constructor(private reporteservice: ReportesService ) { }
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  //barra-cantidad
  public barChartLabels:string[] = ['Jardin tematico','Mariposario','Plantario','Recinto educativo'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;

  public barChartData:any[] = [
    {data: []}
    
  ];

  //barra-cantidad2
  public barChartLabels2:string[] = ['Artistico','Deportivo','Formal','Recreativo'];
  public barChartType2:string = 'bar';
  public barChartLegend2:boolean = false;

  public barChartData2:any[] = [
    {data: []}
    
  ];
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;

    let clone2 = JSON.parse(JSON.stringify(this.barChartData2));
    clone2[0].data = data;
    this.barChartData2 = clone2;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  ngOnInit() {
    this.reporteservice.cantidadarea().subscribe(result=>{
      this.barChartData=[result[0].cantidad,result[1].cantidad,result[2].cantidad,result[3].cantidad];
    });
    this.reporteservice.cantidadC().subscribe(result=>{
      this.barChartData2=[result[0].cantidad,result[1].cantidad,result[2].cantidad,result[3].cantidad];
    });
  }
  evento(){
    this.getimagenes();
    this.reporteservice.getvisita(this.ms).subscribe(result => this.bailar2 = result);
    
  
  
   }
   limpiar(){
     console.log(this.ms);
     if (this.ms == ""){
      console.log("entro");
      this.bailar2=null;
      this.reporteservice.getvisita(this.ms).subscribe(result => this.bailar2);
     }
     
   }
   
   ya:any;
   public cargandoImagen(e){
     this.ya = e.target;
     console.log("AQUI MERO EMPIEZA LO BUENO");
     console.log(this.ya);

   }

   subir() {
    console.log("AQUI MERO EMPIEZA LO BUENO");
    let img:any = this.ya;
    let imgArray:Array<File> = img.files;
    for (let index = 0; index < imgArray.length; index++) {
      const element = imgArray[index];

      let xxd = new FormData();
      xxd.set('file', element);
      xxd.set('folio',this.ms);
      console.log(xxd.get('file'));
      this.reporteservice.subirImagenAdmin(xxd).subscribe( datos => {
        if (datos['resultado']=='OK') {
          console.log("JALO");
          console.log(datos);
          alert("se registro imagenes de evidencia");
         
        } else {
          console.log("NO JALO");
        }
      });
    }
 
  }

  getimagenes(){
    this.reporteservice.mostrar(this.ms).subscribe(result => this.bailame = result);
  }

}
