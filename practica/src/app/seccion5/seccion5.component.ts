import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion5',
  templateUrl: './seccion5.component.html',
  styleUrls: ['./seccion5.component.css']
})
export class Seccion5Component implements OnInit {

  texto:string="Roger"

  array_slice = [1,2,3,4,5,6,7,8,9,10]

  pi=Math.PI

  porcentaje:number = 0.234

  salario:number = 1234.5

  valor_promesa = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('llego la data'), 3500)
  })

  personaje = {
    nombre:"Roger",
    apellido:"Perdomo",
    edad:50,
    direccion:{
      pais:"Venezuela",
      ciudad:"Caracas"
    }
  }

  fecha = new Date()

  nombre_completo:string="rogeR davId Perdomo LOpez"

  nombre_pass:string="Roger"

  ver:Boolean=true

  constructor() { }

  ngOnInit() {
  }

  ver_pass(){
    this.ver=!this.ver
  }

}
