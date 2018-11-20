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
const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'mapa', component: MapaComponent},
  {path: 'vision-mision', component:VisionMisionComponent},
  {path: 'historia', component:HistoriaComponent},
  {path: 'informacion', component:InformacionComponent},
  {path: 'login', component:LoginComponent, canActivate: [Auth2Service]},
  {path: 'primera', component:PrimeraadminComponent, canActivate: [AuthService]},
  {path: 'registroadmin', component:RegistroadminComponent},
  {path: 'reportes',  component: ReportesComponent,canActivate: [AuthService]},
  {path: 'tabla', component:TableComponent},
  {path: 'calendario', component:CalendarioComponent,canActivate: [AuthService]},
  {path: 'calendario2', component:Calendario2Component},
  {path: 'correo/:id', component:CorreoComponent,canActivate: [AuthService]},
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
    CorreoComponent
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
  providers: [VisitasUService],
  bootstrap: [AppComponent]
})
export class AppModule { }
