import { Component, OnInit } from '@angular/core';
import { ReportesService} from '../services/reportes.service';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-reportevisitas',
  templateUrl: './reportevisitas.component.html',
  styleUrls: ['./reportevisitas.component.css']
})
export class ReportevisitasComponent implements OnInit {
  bailar=null;
  bailar2=null;
  bailar3=null;
  ms;
  an;
  constructor(private reporteservice: ReportesService) { }
  dtOptions: any = {};
  dt: any={};

  ngOnInit() {
    this.getdia();
    this.mes();
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
    
    this.dt={
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

    }
    
  
  }

  getdia(){
    this.reporteservice.getvisitadia().subscribe(result => this.bailar = result);
  }
 mes(){
  
  this.reporteservice.getvisitames(this.ms).subscribe(result => this.bailar2 = result);


 }
 ano(){
  
  this.reporteservice.getvisitano(this.an).subscribe(result => this.bailar3 = result);


 }


}
