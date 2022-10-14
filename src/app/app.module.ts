import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListarEmpleadosComponent } from './listar-empleados/listar-empleados.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MasInfoComponent } from './mas-info/mas-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListarEmpleadosComponent,
    NavBarComponent,
    MasInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
