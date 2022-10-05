import { Component, OnInit } from '@angular/core';
import { CartasService } from 'src/app/services/cartas.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  puntosCrupier: number;
  puntosJugador: number;
  resultado: string;

  constructor(private carServ: CartasService) { }

  ngOnInit(): void {
    this.puntosCrupier = this.carServ.puntosCrupier;
    this.puntosJugador = this.carServ.puntosJugador;
    this.resultado = this.carServ.resultado;
  }

  ngOnChange(): void {
    this.puntosCrupier = this.carServ.puntosCrupier;
    this.puntosJugador = this.carServ.puntosJugador;
    this.resultado = this.carServ.resultado;
  }

  puntosJug(jugador: string) {
    this.carServ.obtenerCarta(jugador);
    if (this.carServ.puntosJugador > 21) {
      this.resultado = 'Perdiste';
      //this.puntos();
    }
    this.puntosJugador = this.carServ.puntosJugador;
  }

  puntos() {
    while (this.puntosCrupier <= 17) {
      this.carServ.obtenerCarta('crupier');
      this.puntosCrupier = this.carServ.puntosCrupier;
    }

    if (this.puntosCrupier < 22 && this.puntosCrupier > this.puntosJugador) {
      this.resultado = 'Perdiste';
    } else if (this.puntosCrupier < 22 && this.puntosJugador < 22 && this.puntosCrupier < this.puntosJugador) {
      this.resultado = 'Ganaste!';
    } else if (this.puntosCrupier < 22 && this.puntosCrupier === this.puntosJugador) {
      this.resultado = 'Empate';
    } else if (this.puntosCrupier > 21 && this.puntosJugador < 22) {
      this.resultado = 'Ganaste!';
    }
  }

  limpiar() {
    window.location.reload();
  }
}
