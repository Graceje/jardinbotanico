import { Component, OnInit } from '@angular/core';
import { ReportesService} from '../services/reportes.service';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-reporteventos',
  templateUrl: './reporteventos.component.html',
  styleUrls: ['./reporteventos.component.css']
})
export class ReporteventosComponent implements OnInit {
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
  getdia(){
    this.reporteservice.geteventosdia().subscribe(result => this.bailar = result);
  }
  mes(){
  
    this.reporteservice.geteventosmes(this.ms).subscribe(result => this.bailar2 = result);
  
  
   }
   ano(){
  
    this.reporteservice.geteventoano(this.an).subscribe(result => this.bailar3 = result);
  
  
   }


}
