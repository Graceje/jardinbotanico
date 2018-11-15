import { Component, OnInit } from '@angular/core';
import  { EventosService} from '../eventos.service';
@Component({
  selector: 'app-primeraadmin',
  templateUrl: './primeraadmin.component.html',
  styleUrls: ['./primeraadmin.component.css']
})
export class PrimeraadminComponent implements OnInit {

  constructor( private eventosservice: EventosService) {
  
   }

  ngOnInit() {
  }

}
