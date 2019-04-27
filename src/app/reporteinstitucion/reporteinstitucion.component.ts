import { Component, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild('dataTable') table;
  dataTable: any;
  dtOptions: any;
  @ViewChild('dataTable2') table2;
  dataTable2: any;
  dtOptions2: any;
  constructor(private reporteservice: ReportesService) { }

  ngOnInit() {
  
    this.dtOptions = {
      "ajax": {
        url: 'http://machiwi.tech/api-jardin/select_reporteinstituion.php',
        type: 'GET'
         
      },
      columns: [
          {
            title: 'Nombre',
              data: 'nombre'
          },
          {
            title: 'Dirección',
              data: 'direccion'
          },
          {
            title: 'Localidad',
              data: 'localidad'
          },
          {
            title: 'Sector',
              data: 'sector_educativo'
          }
      ],
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
  };
  this.dataTable = $(this.table.nativeElement);
  this.dataTable.DataTable(this.dtOptions);

  
  this.dtOptions2 = {
    "ajax": {
      url: 'http://machiwi.tech/api-jardin/select_reporteCantidadinst.php',
      type: 'GET'
       
    },
    columns: [
        {
          title: 'Institución',
            data: 'institucion'
        },
        {
          title: 'Cantidad',
            data: 'cantidad'
        }
        
      ],
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
    };
    this.dataTable2 = $(this.table2.nativeElement);
    this.dataTable2.DataTable(this.dtOptions2);
  }
 
  getcinst(){
    this.reporteservice.getinst().subscribe(result => this.bailame = result);
  }

}
