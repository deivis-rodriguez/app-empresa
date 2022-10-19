import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  public empleado: Empleado = new Empleado();

  constructor(private servicio: EmpleadoService, private ubicacion: Location) {
  }

  ngOnInit(): void {
  }

  guardar() {
    console.log(this.empleado)
    this.servicio.guardarEmpleado(this.empleado).subscribe((empleado) => {
      alert('empleado guardado\n' + empleado);
      this.ubicacion.back();
    })
  }

}
