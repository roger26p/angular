import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { CallbackComponent } from './components/callback/callback.component';

import {APP_ROUTING} from './app.routes';

//Servicios
import {AuthService} from './services/auth.service'
import {AuthGuardService} from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidaComponent,
    CallbackComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
