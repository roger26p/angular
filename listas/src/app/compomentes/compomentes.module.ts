import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListasComponent} from '../compomentes/listas/listas.component'
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [ListasComponent ],  //Declarar los componentes

  exports:[ListasComponent], //Si queremos utilizar el componente en otro lugar

  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class CompomentesModule { }
