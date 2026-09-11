import { Component } from '@angular/core';
import { ImcComponent } from './imc/imc'; // Sem o ".component" no final

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ImcComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'calculadora-imc';
}