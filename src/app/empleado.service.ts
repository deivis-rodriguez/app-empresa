import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from './empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private url: string;
  private httpCliente: HttpClient;

  constructor(httpCliente: HttpClient) {
    this.url = 'http://localhost:8080/empleados';
    this.httpCliente = httpCliente;
  }

  public listarEmpleados(): Observable<Empleado[]> {
    return this.httpCliente.get<Empleado[]>(this.url);
  }
}
