import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 1984;
  puedeCliquear = false;

  saludar() {
    alert('hola extraño')
  }
}
