import { Component, OnInit } from '@angular/core';
import { ReportesService} from '../services/reportes.service';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-reporteinstitucion',
  templateUrl: './reporteinstitucion.component.html',
  styleUrls: ['./reporteinstitucion.component.css']
})
export class ReporteinstitucionComponent implements OnInit {
  bailar=null;
  bailar2=null;
  bailar3=null;
  bailame=null;
  ms;
  an;
  constructor(private reporteservice: ReportesService) { }
  dtOptions: any = {};
  ngOnInit() {
    this.getinst();
    this.getcinst();
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
  getinst(){
    this.reporteservice.get_inst().subscribe(result => this.bailar = result);
  }
  getcinst(){
    this.reporteservice.getinst().subscribe(result => this.bailame = result);
  }

}
