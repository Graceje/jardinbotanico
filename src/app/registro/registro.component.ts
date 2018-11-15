import { Component, OnInit } from '@angular/core';
import { Visitas } from '../models/visitas';
import { VisitasUService} from '../services/visitas-u.service';
import {NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
   vis: Visitas;
  constructor(private visitasuService: VisitasUService) {
    this.vis= new Visitas;
   }

  ngOnInit() {
    //this.visitasuService.getvisitas().subscribe(visitas => {
      //console.log(visitas);
    //} )
  }
  onguardar(){
    
    

  }

}
