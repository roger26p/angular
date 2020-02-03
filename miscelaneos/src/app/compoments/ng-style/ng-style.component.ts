import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      hola mundo esto es una etiqueta html
    </p>

    <button class="btn btn-primary" (click)="tamano = tamano+5">+</button>
    <button class="btn btn-primary" (click)="tamano = tamano-5">-</button>

    `,
  styles: [] //Esta etiqueta agrega estilo unico a cada pagina
})
export class NgStyleComponent implements OnInit {

  tamano:number=20

  constructor() { }

  ngOnInit() {
  }

}
