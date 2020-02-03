import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
  })


export class BodyComponent {
  info:any = {
    nombre:'Roger Perdomo',
    texto:'Roger Perdomo es muy inteligente y me creo'
  }

  mostrar:Boolean=true

  personajes:String[] = ["Roger","Milagros","Fabian"]

}