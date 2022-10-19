import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListarEmpleadosComponent } from './listar-empleados/listar-empleados.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MasInfoComponent } from './mas-info/mas-info.component';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { InicioComponent } from './inicio/inicio.component';
import { EmpleadoService } from './empleado.service';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListarEmpleadosComponent,
    NavBarComponent,
    MasInfoComponent,
    CrearEmpleadoComponent,
    InicioComponent,
    EditarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
