import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProtegidaComponent} from './components/protegida/protegida.component'

const routes: Routes = [
  {
    path: 'protegida',
    component: ProtegidaComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
