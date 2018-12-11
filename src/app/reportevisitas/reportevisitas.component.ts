import { Component, OnInit, ChangeDetectorRef, ViewChild} from '@angular/core';
import { ReportesService} from '../services/reportes.service';
declare var jQuery:any;
declare var $:any;
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas'; 
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

  @ViewChild('dataTable') table;
  dataTable: any;
  dtOptions: any;
  public generatePDF() 
          { 
          var data = document.getElementById('table'); 
          html2canvas(data).then(canvas => { 
              // Few necessary setting options 
              var imgWidth = 188; 
              var pageHeight = 295; 
              var imgHeight = canvas.height * imgWidth / canvas.width; 
              var heightLeft = imgHeight; 
              
              const contentDataURL = canvas.toDataURL('image/png') 
              let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF 
              var position = 0; 
              pdf.addImage(contentDataURL, 'PNG', 10, position, imgWidth, imgHeight) 
              pdf.save('MYPdf.pdf'); // Generated PDF  
          }); 
 }
 public generatePDF2() 
          { 
          var data = document.getElementById('table2'); 
          html2canvas(data).then(canvas => { 
              // Few necessary setting options 
              var imgWidth = 188; 
              var pageHeight = 295; 
              var imgHeight = canvas.height * imgWidth / canvas.width; 
              var heightLeft = imgHeight; 
              
              const contentDataURL = canvas.toDataURL('image/png') 
              let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF 
              var position = 0; 
              pdf.addImage(contentDataURL, 'PNG', 10, position, imgWidth, imgHeight) 
              pdf.save('MYPdf.pdf'); // Generated PDF  
          }); 
 } 
  constructor(private reporteservice: ReportesService, private ref: ChangeDetectorRef) { 
   
    
  }
  
  dt: any={};

  ngOnInit() {
   
    this.mes();
    this.dtOptions = {
        "ajax": {
          url: 'http://machiwi.tech/api-jardin/select_reportevisitadia.php',
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
              title: 'Contacto',
                data: 'contacto'
            },
            {
              title: 'Niños',
                data: 'ninos'
            },
            {
              title: 'Niñas',
                data: 'ninas'
            },
            {
              title: 'Telefono',
                data: 'telefono'
            },
            {
              title: 'Correo',
                data: 'correo'
            },
            {
              title: 'Fecha',
                data: 'fecha'
            },
            {
              title: 'Hora',
                data: 'tiempo'
            },
            {
              title: 'Mujeres',
                data: 'mujeres'
            },
            {
              title: 'Hombres',
                data: 'hombres'
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
    
  }

 mes(){
  
  this.reporteservice.getvisitames(this.ms).subscribe(result => this.bailar2 = result);


 }
 ano(){
  
  this.reporteservice.getvisitano(this.an).subscribe(result => this.bailar3 = result);


 }


}
