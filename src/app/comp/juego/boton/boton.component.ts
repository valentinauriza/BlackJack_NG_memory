import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartasService } from 'src/app/services/cartas.service';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  @Input() resultado: string = '';
  @Output() onQuedar = new EventEmitter();
  @Output() OnPedir = new EventEmitter();
  @Output() onBorrar = new EventEmitter();

  constructor(private carServ: CartasService) {
    this.resultado = this.carServ.resultado;
  }

  ngOnInit(): void {

  }

  pedir() {
    this.OnPedir.emit();
  }

  quedar() {
    this.onQuedar.emit();
  }

  empezarNvmt() {
    this.onBorrar.emit();
  }
}
