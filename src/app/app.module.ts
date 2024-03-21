import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { InicioComponent } from './components/inicio/inicio.component';
import { HerramientasComponent } from './components/herramientas/herramientas.component';

import { RegistrarMermasComponent } from './components/registrar-mermas/registrar-mermas.component';
import { ProdListComponent } from './components/prod-list/prod-list.component';
import { RegistrarProdComponent } from './components/registrar-prod/registrar-prod.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    HerramientasComponent,
    RegistrarMermasComponent,
    ProdListComponent,
    RegistrarProdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
