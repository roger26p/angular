import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent implements OnInit {

  usuario:Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "H",
    acepta: false
  }

  paises = [{
    codigo:"VEN",
    pais:"Venezuela"
  },
  {
    codigo:"CHI",
    pais:"Chile"
  }
  ]

  constructor() { }

  ngOnInit() {
  }

  guardar(forma:NgForm){
    console.log(forma.value)
    console.log(this.usuario)
  }
}
