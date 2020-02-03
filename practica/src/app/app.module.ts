import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import {CapitalizadoPipe} from './seccion5/pipes/capitalizado.pipe'
//rutas
import { APP_ROUTING } from './app.routes'

//Servicios
import {HeroesService} from './seccion4/servicios/heroes.service'

//components
import { AppComponent } from './app.component';
import { HeaderComponent }from './header.component';
import {BodyComponent }from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './seccion4/navbar/navbar.component';
import { HomeComponent } from './seccion4/home/home.component';
import { SobreComponent } from './seccion4/sobre/sobre.component';
import { HeroesComponent } from './seccion4/heroes/heroes.component';
import { HeroeComponent } from './seccion4/heroe/heroe.component';
import { ResultadoComponent } from './seccion4/resultado/resultado.component';
import { InputComponent } from './seccion4/input/input.component';
import { Seccion5Component } from './seccion5/seccion5.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { PassPipe } from './seccion5/pipes/pass.pipe';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CapitalizadoPipe,
    BodyComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    SobreComponent,
    HeroesComponent,
    HeroeComponent,
    ResultadoComponent,
    InputComponent,
    Seccion5Component,
    PassPipe
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [HeroesService, {provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
