import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  empleado !: Empleado;
  mostrar = true;
  title = 1984;
  puedeCliquear = false;
  // nos va pertimir generar un evento desde el este componente

  lista = [
    { nombre: 'Maria', edad: '21', curso: 'Fundamentos de programación' },
    { nombre: 'José', edad: '18', curso: 'Diseño web' },
    { nombre: 'Alejandro', edad: '20', curso: 'Programación Orientado a Objetos' },
  ]

  saludar() {
    alert('hola extraño')
  }

  setEmplado(empleado: Empleado) {
    this.empleado = empleado;

    console.log(this.empleado)
  }
}
