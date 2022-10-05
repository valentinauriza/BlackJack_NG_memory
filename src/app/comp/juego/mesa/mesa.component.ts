import { Component, Input, OnInit } from '@angular/core';
import { CartasService } from 'src/app/services/cartas.service';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit {
  cartasCrupier: any[] = [];
  cartasJugador: any[] = [];
  @Input() puntosCrupier: number;
  @Input() puntosJugador: number;
  cartaUrl: string = './../../../../assets/cartas/'

  constructor(private carServ: CartasService) { }

  ngOnInit(): void {
    this.cartasCrupier = this.carServ.cartasCrupier;
    this.cartasJugador = this.carServ.cartasJugador;
  }

      
}
