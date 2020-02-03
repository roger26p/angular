import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import {CompomentesModule} from '../../compomentes/compomentes.module'  //Los modulos se utilizan para tener el codigo centralizado 

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CompomentesModule, //Modulo (/app/compomentes/compomentes.modulo.ts)
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
