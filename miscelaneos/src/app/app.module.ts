import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgStyleComponent } from './compoments/ng-style/ng-style.component';
import { ClasesComponent } from './compoments/clases/clases.component';
import { ResaltadoDirective } from './directivas/resaltado.directive';
import { NgSwitchComponent } from './compoments/ng-switch/ng-switch.component';
import { HomeComponent } from './compoments/home/home.component';

import {APP_ROUTING} from './app.routes';
import { UsuarioComponent } from './compoments/usuario/usuario.component';
import { UsuarioNuevoComponent } from './compoments/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './compoments/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './compoments/usuario/usuario-detalle.component';
import { NavbarComponent } from './compoments/navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    ClasesComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent,
    UsuarioDetalleComponent,
    NavbarComponent
  ],
  imports: [
    APP_ROUTING,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
