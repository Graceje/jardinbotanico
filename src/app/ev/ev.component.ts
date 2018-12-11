import { Component, OnInit } from '@angular/core';
import { EventosService } from '../services/eventos.service';
import { HttpClient } from '@angular/common/http';
import { NgForm} from '@angular/forms';
@Component({
  selector: 'app-ev',
  templateUrl: './ev.component.html',
  styleUrls: ['./ev.component.css']
})
export class EvComponent implements OnInit {
  bailame=null;

  constructor(private eventosservice: EventosService) { }

  ngOnInit() {
    this.geteventos();
  }
  geteventos(){
    this.eventosservice.mostrar().subscribe(result => this.bailame = result);
  }

}
