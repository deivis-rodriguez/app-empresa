import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-mas-info',
  templateUrl: './mas-info.component.html',
  styleUrls: ['./mas-info.component.css']
})
export class MasInfoComponent {

  @Input() empleado!: Empleado;

  constructor() { 
    
  }

}
