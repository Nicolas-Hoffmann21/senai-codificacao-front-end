import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imc',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './imc.html',
  styleUrl: './imc.css'
})
export class ImcComponent {  // O "export" é obrigatório aqui!
  // ...
  peso: number = 0;
  altura: number = 0;
  resultado: number = 0;
  calculado: boolean = false;
  mensagemErro: string = '';

  calcularImc() {
    if (this.altura <= 0) {
      this.mensagemErro = 'Informe uma altura válida, maior que zero!';
      return;
    }

    this.mensagemErro = '';
    this.resultado = this.peso / (this.altura * this.altura);
    this.calculado = true;
  }

  classificarImc(): string {
    if (this.resultado < 18.5) return 'Abaixo do peso';
    if (this.resultado < 25) return 'Peso normal';
    if (this.resultado < 30) return 'Sobrepeso';
    return 'Obesidade';
  }

  limpar() {
    this.peso = 0;
    this.altura = 0;
    this.resultado = 0;
    this.calculado = false;
    this.mensagemErro = '';
  }
}