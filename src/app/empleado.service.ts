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
    this.url = 'http://129.213.129.206:8080/empresa/empleados';
    this.httpCliente = httpCliente;
  }

  public listarEmpleados(): Observable<Empleado[]> {
    return this.httpCliente.get<Empleado[]>(this.url);
  }

  public getEmpleado(idEmpleado: string): Observable<Empleado> {
    let ruta = `${this.url}/${idEmpleado}`;
    return this.httpCliente.get<Empleado>(ruta);
  }

  public guardarEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.httpCliente.post<Empleado>(this.url, empleado);
  }


  public actualizarEmpleado(empleado: Empleado): Observable<void> {
    let ruta = `${this.url}/${empleado.idEmpleado}`;
    return this.httpCliente.put<void>(ruta, empleado)
  }

  public eliminarEmpleado(idEmpleado: number): Observable<Empleado> {
    let ruta = `${this.url}/${idEmpleado}`;
    return this.httpCliente.delete<Empleado>(ruta)
  }
}
