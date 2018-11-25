import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {ReportesService} from '../../app/services/reportes.service';
@Component({
  selector: 'app-calendario3',
  templateUrl: './calendario3.component.html',
  styleUrls: ['./calendario3.component.css']
})
export class Calendario3Component implements OnInit {
  bailar=null;
  constructor(public reporteservice:ReportesService) { }

  ngOnInit() {
    this.reporteservice.calendario2().subscribe(result => {
      let evs = Array();
      for (let index = 0; index < result.length; index++) {
        const element = result[index];
        let hora: string = (element.tiempo.substring(0,2));
        let y: number; 
        y = +hora;
        y= y +1;
        if (y<10){
          hora = "0"+y;
        }else{
          hora = ""+y;
        }
        hora= hora+element.tiempo.substring(2);
        const ev:{}={
          title: element.titulo,
          start: element.fecha +"T"+element.tiempo,
          end: element.fecha +"T"+hora
        };
        evs.push(ev);
      }
      $('#calendar').fullCalendar({
        events: evs,
        defaultView:"agendaWeek",
         editable: true,
         eventLimit: false,
         header: {
           left: 'prev,next today',
           center: 'title',
           right: 'month,agendaWeek,agendaDay,listMonth'
         },
        eventClick: function(calEvent, jsEvent, view) {
      
          alert('Event: ' + calEvent.title) ;
          alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
          alert('View: ' + view.name);
          
          // change the border color just for fun
          $(this).css('border-color', 'red');
      
        }
      });

    });
  }

}
