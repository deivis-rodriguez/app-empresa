import { Component, Output, EventEmitter } from '@angular/core';
import { Empleado, empleados } from '../empleado';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent {
  visible = 'none';
  signo = '+';
  listaEmpleados: Empleado[];
  @Output() notificar = new EventEmitter<Empleado>();

  constructor() {
    this.listaEmpleados = empleados;
  }

  mostrarDetalle() {
    if (this.visible == 'none') {
      this.visible = 'block';
      this.signo = '-';

    } else {
      this.visible = 'none';
      this.signo = '+';
    }
  }
}
