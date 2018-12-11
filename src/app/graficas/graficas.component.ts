import { Component, OnInit } from '@angular/core';
import {ReportesService } from '../services/reportes.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {
  bailame=null;

  constructor( private reporteservice: ReportesService) { }
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  //barra-AREAS
  public barChartLabels:string[] = ['jardin tematico','mariposario','plantario','recinto educativo'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;

  public barChartData:any[] = [
    {data: []}
    
  ];

  // Pie-PASTEL-PERSONAS
  public pieChartLabels:string[] = ['niños','niñas','Hombres','Mujeres'];;
  public pieChartData:number[] = [];
  public pieChartType:string = 'pie';

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
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  ngOnInit() {
    this.getinst();
    this.reporteservice.getpersonas().subscribe(resul=>{
      console.log("aqui");
      console.log(resul);
      console.log(this.pieChartLabels);
      this.pieChartData=[resul[0].ninos,resul[0].ninas,resul[0].hombres,resul[0].mujeres];
      console.log(this.pieChartData);

    });
    this.reporteservice.getareas().subscribe(result=>{
      this.barChartData=[result[0].areas,result[1].areas,result[2].areas,result[3].areas];
    });

  
  }
  getinst(){
    this.reporteservice.getmeses().subscribe(result => this.bailame = result);
  }

}
