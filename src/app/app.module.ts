import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { RegistroComponent } from './registro/registro.component';
import { EventosComponent } from './eventos/eventos.component';
import { from } from 'rxjs';
import { MapaComponent } from './mapa/mapa.component';
import { VisionMisionComponent } from './vision-mision/vision-mision.component';
import { HistoriaComponent } from './historia/historia.component';
import { InformacionComponent } from './informacion/informacion.component';
import { LoginComponent } from './login/login.component';
import { HeaderadminComponent } from './headeradmin/headeradmin.component';
import { PrimeraadminComponent } from './primeraadmin/primeraadmin.component';
import { RegistroadminComponent } from './registroadmin/registroadmin.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ChartsModule } from 'ng2-charts';
import { DataTablesModule } from 'angular-datatables';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';
import { TableeventosComponent } from './tableeventos/tableeventos.component';
import { CalendarioComponent } from './calendario/calendario.component';
import {FullCalendarModule } from 'ng-fullcalendar';
import { Calendario2Component } from './calendario2/calendario2.component';
import { environment } from '../environments/environment';
import { VisitasUService } from '../app/services/visitas-u.service';
import { FormsModule } from '@angular/forms';
import { NotificacionesService } from '../app/services/notificaciones.service';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { CorreoComponent } from './correo/correo.component';
import { AuthService } from '../app/services/auth.service';
import { Auth2Service } from '../app/services/auth2.service';
import { GraficasComponent } from './graficas/graficas.component';
import { ReportevisitasComponent } from './reportevisitas/reportevisitas.component';
import { ReporteventosComponent } from './reporteventos/reporteventos.component';
import { ReporteinstitucionComponent } from './reporteinstitucion/reporteinstitucion.component';
import { Calendario3Component } from './calendario3/calendario3.component';
import { EvComponent } from './ev/ev.component';
import { ReportevidenciaComponent } from './reportevidencia/reportevidencia.component';
import { InstitucionComponent } from './institucion/institucion.component';
import { CorreoinstitucionComponent } from './correoinstitucion/correoinstitucion.component';



const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'mapa', component: MapaComponent},
  {path: 'eve', component: EvComponent},
  {path: 'registro_institucion', component: InstitucionComponent},
  {path: 'vision-mision', component:VisionMisionComponent},
  {path: 'historia', component:HistoriaComponent},
  {path: 'informacion', component:InformacionComponent},
  {path: 'login', component:LoginComponent, canActivate: [Auth2Service]},
  {path: 'primera', component:PrimeraadminComponent, canActivate: [AuthService]},
  {path: 'registroadmin', component:RegistroadminComponent,canActivate: [AuthService]},
  {path: 'reportes',  component: ReportesComponent,canActivate: [AuthService]},
  {path: 'tabla', component:TableComponent},
  {path: 'calendario', component:CalendarioComponent,canActivate: [AuthService]},
  {path: 'calendario2', component:Calendario2Component},
  {path: 'correo', component:CorreoComponent,canActivate: [AuthService]},
  {path: 'institucion', component:CorreoinstitucionComponent,canActivate: [AuthService]},
  {path: 'reporte_graficas', component:GraficasComponent,canActivate: [AuthService]},
  {path: 'reporte_visitas', component:ReportevisitasComponent,canActivate: [AuthService]},
  {path: 'reporte_eventos', component:ReporteventosComponent,canActivate: [AuthService]},
  {path: 'reporte_instituciones', component:ReporteinstitucionComponent,canActivate: [AuthService]},
  {path: 'reporte_evidencia', component:ReportevidenciaComponent,canActivate: [AuthService]},
  
  {path: '**', component: InicioComponent}
  
  
 
];
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    RegistroComponent,
    EventosComponent,
    MapaComponent,
    VisionMisionComponent,
    HistoriaComponent,
    InformacionComponent,
    LoginComponent,
    HeaderadminComponent,
    PrimeraadminComponent,
    RegistroadminComponent,
    ReportesComponent,
    FooterComponent,
    TableComponent,
    TableeventosComponent,
    CalendarioComponent,
    Calendario2Component,
    CorreoComponent,
    GraficasComponent,
    ReportevisitasComponent,
    ReporteventosComponent,
    ReporteinstitucionComponent,
    Calendario3Component,
    EvComponent,
    ReportevidenciaComponent,
    InstitucionComponent,
    CorreoinstitucionComponent,
   
  

  ],
  imports: [
    BrowserModule,
    ChartsModule,
    DataTablesModule,
    FullCalendarModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [VisitasUService, NotificacionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
