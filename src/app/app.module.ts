import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemComponent } from './component/listagem/listagem.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { NavbarComponent } from './model/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    FormularioComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
