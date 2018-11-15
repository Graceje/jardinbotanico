import { Component, OnInit, ViewChild} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-calendario2',
  templateUrl: './calendario2.component.html',
  styleUrls: ['./calendario2.component.css']
})
export class Calendario2Component implements OnInit {

  constructor() { }

  ngOnInit() {

    $('#calendar').fullCalendar({
      events: [
        {
          title: 'Event Title1',
          start: '2018-03-17T13:13:55.008',
          end: '2018-03-19T13:13:55.008'
        },
        {
          title: 'Event Title2',
          start: '2018-03-17T13:13:55-0400',
          end: '2018-03-19T13:13:55-0400'
        }
      ],
      defaultView:"agendaWeek",
       editable: true,
       eventLimit: false,
       header: {
         left: 'prev,next today',
         center: 'title',
         right: 'month,agendaWeek,agendaDay,listMonth'
       },
      eventClick: function(calEvent, jsEvent, view) {
    
        alert('Event: ' + calEvent.title);
        alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
        alert('View: ' + view.name);
    
        // change the border color just for fun
        $(this).css('border-color', 'red');
    
      }
    });

  }

}
