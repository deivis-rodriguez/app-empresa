import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: '../crear-empleado/crear-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  public empleado: Empleado = new Empleado();

  constructor(private servicio: EmpleadoService,  private ruta: ActivatedRoute, private ubicacion: Location) {
   }

  ngOnInit(): void {
    const id = String(this.ruta.snapshot.paramMap.get('idEmpleado'));
    this.servicio.getEmpleado(id).subscribe((empleado: Empleado) => {
      this.empleado = empleado;
    })
  }

  guardar() {
    console.log(this.empleado)
    this.servicio.actualizarEmpleado(this.empleado).subscribe((empleado) => {
      alert('empleado actualizado');
      this.ubicacion.back();
    })
  }

}
