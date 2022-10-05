import { Injectable } from '@angular/core';
import { Carta } from '../carta';

@Injectable({
  providedIn: 'root'
})
export class CartasService {
  //t: trebol - p: pica - c: corazón - d: diamante
  cartas: Carta[] = [
    { carta: "AD", id: 1, valor: 11 },
    { carta: "AT", id: 2, valor: 11 },
    { carta: "AC", id: 3, valor: 11 },
    { carta: "AP", id: 4, valor: 11 },

    { carta: "2D", id: 5, valor: 2 },
    { carta: "2T", id: 6, valor: 2 },
    { carta: "2C", id: 7, valor: 2 },
    { carta: "2P", id: 8, valor: 2 },

    { carta: "3D", id: 9, valor: 3 },
    { carta: "3T", id: 10, valor: 3 },
    { carta: "3C", id: 11, valor: 3 },
    { carta: "3P", id: 12, valor: 3 },

    { carta: "4D", id: 13, valor: 4 },
    { carta: "4T", id: 14, valor: 4 },
    { carta: "4C", id: 15, valor: 4 },
    { carta: "4P", id: 16, valor: 4 },

    { carta: "5D", id: 17, valor: 5 },
    { carta: "5T", id: 18, valor: 5 },
    { carta: "5C", id: 19, valor: 5 },
    { carta: "5P", id: 20, valor: 5 },

    { carta: "6D", id: 21, valor: 6 },
    { carta: "6T", id: 22, valor: 6 },
    { carta: "6C", id: 23, valor: 6 },
    { carta: "6P", id: 24, valor: 6 },

    { carta: "7D", id: 25, valor: 7 },
    { carta: "7T", id: 26, valor: 7 },
    { carta: "7C", id: 27, valor: 7 },
    { carta: "7P", id: 28, valor: 7 },

    { carta: "8D", id: 29, valor: 8 },
    { carta: "8T", id: 30, valor: 8 },
    { carta: "8C", id: 31, valor: 8 },
    { carta: "8P", id: 32, valor: 8 },

    { carta: "9D", id: 33, valor: 9 },
    { carta: "9T", id: 34, valor: 9 },
    { carta: "9C", id: 35, valor: 9 },
    { carta: "9P", id: 36, valor: 9 },

    { carta: "10D", id: 37, valor: 10 },
    { carta: "10T", id: 38, valor: 10 },
    { carta: "10C", id: 39, valor: 10 },
    { carta: "10P", id: 40, valor: 10 },

    { carta: "JD", id: 41, valor: 10 },
    { carta: "JT", id: 42, valor: 10 },
    { carta: "JC", id: 43, valor: 10 },
    { carta: "JP", id: 44, valor: 10 },

    { carta: "QD", id: 45, valor: 10 },
    { carta: "QT", id: 46, valor: 10 },
    { carta: "QC", id: 47, valor: 10 },
    { carta: "QP", id: 48, valor: 10 },

    { carta: "KD", id: 49, valor: 10 },
    { carta: "KT", id: 50, valor: 10 },
    { carta: "KC", id: 51, valor: 10 },
    { carta: "KP", id: 52, valor: 10 },
  ];

  ases: Carta[] = [
    { carta: "AD", id: 1, valor: 11 },
    { carta: "AT", id: 2, valor: 11 },
    { carta: "AC", id: 3, valor: 11 },
    { carta: "AP", id: 4, valor: 11 }];

  cartasCrupier: Carta[] = [];
  puntosCrupier: number = 0;
  cartasJugador: Carta[] = [];
  puntosJugador: number = 0;
  disponibles: Carta[] = [];
  resultado: string = "";

  constructor() {
    this.disponibles = this.cartas.slice();
  }
  asChanged = false;

  obtenerCarta(jugador: string) {
    let cartaR = this.disponibles.splice(Math.floor(Math.random() * 52), 1)[0];


    if (jugador === 'crupier') {
      this.cartasCrupier.push(cartaR);
      let valorCarta: number = this.obtenerPuntos(cartaR as Carta, jugador);

      this.puntosCrupier += valorCarta;
    } else {
      this.cartasJugador.push(cartaR);
      let valorCarta: number = this.obtenerPuntos(cartaR as Carta, jugador );
      this.puntosJugador += valorCarta;

      if (this.puntosJugador > 21) {
        console.log(this.puntosJugador);
        this.cartasJugador.forEach((e) => {
          if (this.ases.filter((item) => item.id == e.id).length > 0 && !this.asChanged) {
            this.asChanged=true;
            this.puntosJugador= this.puntosJugador-10;
          }
        });
      } 
    }
  }

  obtenerPuntos(carta: Carta, jugador: string) {
    let puntaje = 0;
    let valorCarta = 0;

    if (jugador === 'crupier') {
      puntaje = this.puntosCrupier;
    } else {
      puntaje = this.puntosJugador
    }


    valorCarta = carta.valor;  
    return valorCarta;
  }

  empezarNvmt() {
    this.cartasCrupier = [];
    this.cartasJugador = [];
    this.disponibles = this.cartas.slice();
    this.puntosCrupier = 0;
    this.puntosJugador = 0;
    this.resultado = '';
  }
}
