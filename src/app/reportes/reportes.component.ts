import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;
import {ReportesService } from '../services/reportes.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})

export class ReportesComponent implements  OnInit  {
  constructor ( private reporteservice:ReportesService){

  }
  dtOptions: any = {};
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  // Pie
  public pieChartLabels:string[] = ['niños','niñas','Hombres','Mujeres'];;
  public pieChartData:number[] = [];
  public pieChartType:string = 'pie';


  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
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
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
  ngOnInit(){
    this.reporteservice.getpersonas().subscribe(resul=>{
      console.log("aqui");
      console.log(resul);
      console.log(this.pieChartLabels);
      this.pieChartData=[resul[0].ninos,resul[0].ninas,resul[0].hombres,resul[0].mujeres];
      console.log(this.pieChartData);

    });
    this.dtOptions = {
      "ordering": false,
      dom: 'Bfrtip',
      buttons: [
                'copy',
                {
                    extend: 'excel',
                    title: 'Reporte'
                },
                {
                    extend: 'pdf',
                    title: 'Reporte'
                },
                {
                    extend: 'print',
                    title: 'Reporte'
                }
            ],
      language: {
        "emptyTable": "Sin resultados encontrados",
        "info": " _START_ - _END_ / _TOTAL_ ",
        "infoEmpty": "0-0 /0",
        "infoFiltered": "",
        "infoPostFix": "",
        "thousands": ",",
        "lengthMenu": "Mostrar _MENU_ registros",
        "loadingRecords": "Cargando...",
        "processing": "Procesando...",
        "search": "Buscar:",
        "zeroRecords": "Sin resultados encontrados",
        "paginate": {
            "first": "Primero",
            "last": "Ultimo",
            "next": "Siguiente",
            "previous": "Anterior"
        },
      }

    };
  }


}
