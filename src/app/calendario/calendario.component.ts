import { Component, OnInit,ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { data } from 'jquery';
@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor() { }

  ngOnInit() {
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      events: data
    };
  }

}
