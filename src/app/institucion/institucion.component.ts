import { Component, OnInit ,ViewChild} from '@angular/core';
import { VisitasUService} from '../services/visitas-u.service';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-institucion',
  templateUrl: './institucion.component.html',
  styleUrls: ['./institucion.component.css']
})
export class InstitucionComponent implements OnInit {
  @ViewChild('dataTable') table;
  dataTable: any;
  dtOptions: any;
  inst=null;
  in= {
    nombre:null,
    direccion:null,
    localidad:null,
    sector_educativo:null,
    telefono:null,
  }

  constructor(private visitasuService: VisitasUService) { }

  ngOnInit() {
    this.dtOptions = {
      "ajax": {
        url: 'http://machiwi.tech/api-jardin/select_instituciones2.php',
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
            title: 'Sector educativo',
              data: 'sector_educativo'
          }
         
      ],
      

  };
  this.dataTable = $(this.table.nativeElement);
  this.dataTable.DataTable(this.dtOptions);
  
  }
  altainst() {

    this.visitasuService.altainst(this.in).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
       
     
       
       

      }
    });
    this.in= {
      nombre:' ',
      direccion:' ',
      localidad:' ',
      sector_educativo:' ',
      telefono: ' ',
    }
  }

}
