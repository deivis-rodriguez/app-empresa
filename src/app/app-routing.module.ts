import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEmpleadosComponent } from './listar-empleados/listar-empleados.component';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { InicioComponent } from './inicio/inicio.component';

const rutas: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'listar-empleados', component: ListarEmpleadosComponent },
  { path: 'crear-empleado', component: CrearEmpleadoComponent },
  { path: 'inicio', component: InicioComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(rutas)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
