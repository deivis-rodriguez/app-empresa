import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-mas-info',
  templateUrl: './mas-info.component.html',
  styleUrls: ['./mas-info.component.css']
})
export class MasInfoComponent implements OnInit {

  //  @Input() empleado!: Empleado;
  empleado!: Empleado;


  constructor(private servicio: EmpleadoService, private ruta: ActivatedRoute, private ubicacion: Location) {
  }

  ngOnInit() {
    const id = String(this.ruta.snapshot.paramMap.get('idEmpleado'));
    this.servicio.getEmpleado(id).subscribe((empleado: Empleado) => {
      this.empleado = empleado;
    })
  }

  volver() {
    this.ubicacion.back();
  }

  eliminar() {
    this.servicio.eliminarEmpleado(this.empleado.idEmpleado).subscribe(() => {
      alert(`el empleado ${this.empleado.nombre} fue eliminado`)
    })
  }
}
