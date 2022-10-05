import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntradaComponent } from './comp/entrada/entrada.component';
import { CartaComponent } from './comp/juego/carta/carta.component';
import { MesaComponent } from './comp/juego/mesa/mesa.component';
import { BotonComponent } from './comp/juego/boton/boton.component';
import { BaseComponent } from './comp/base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    EntradaComponent,
    CartaComponent,
    MesaComponent,
    BotonComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
