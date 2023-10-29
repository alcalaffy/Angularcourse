import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadoServiceService } from './empleado-service.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProjectsComponentComponent } from './projects-component/projects-component.component';
import { AboutUsComponentComponent } from './about-us-component/about-us-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { ErrorPersonalizadoComponentComponent } from './error-personalizado-component/error-personalizado-component.component';
import {HttpClientModule} from '@angular/common/http';
import { DataServices } from './data.services';
const appRoutes:Routes=[
{path:"",component:HomeComponentComponent},
{path:"projects",component:ProjectsComponentComponent},
{path:"aboutus",component:AboutUsComponentComponent},
{path:"contact",component:ContactComponentComponent},
{path:"updateEmployee/:id",component:UpdateComponentComponent},
{path:"**",component:ErrorPersonalizadoComponentComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponentComponent,
    ProjectsComponentComponent,
    AboutUsComponentComponent,
    ContactComponentComponent,
    UpdateComponentComponent,
    ErrorPersonalizadoComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ServicioEmpleadosService,EmpleadoServiceService,DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
