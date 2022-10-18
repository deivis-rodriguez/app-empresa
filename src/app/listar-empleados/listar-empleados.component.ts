import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {
  visible = 'none';
  signo = '+';
  listaEmpleados: Empleado[];
  mEmpleado!: Empleado;
  servicio: EmpleadoService;

  constructor(sevicio: EmpleadoService) {
    this.servicio = sevicio;
    this.listaEmpleados = [];
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

  ngOnInit(): void {
    this.servicio.listarEmpleados().subscribe((empleados) => {
      this.listaEmpleados = empleados;
    });
  }
}
