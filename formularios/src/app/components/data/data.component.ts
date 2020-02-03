import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { resolve } from 'url';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  forma: FormGroup

  usuario:Object = {
    nombrecompleto:{
      nombre:"roger",
      apellido:"perdomo"  
    },
    correo:"rogerdavidp55@gmail.com",
    pasatiempos: ["correr", "dormir", "comer"]
  }

  constructor() { 
    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'apellido': new FormControl('', [Validators.required, this.noPerdomo])  
      }),
      'correo': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'pasaTiempos': new FormArray([
        new FormControl('correr', Validators.required)
      ]),
      'username': new FormControl('', Validators.required, this.existeUsuario),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    })

    this.forma.controls['password2'].setValidators([
      Validators.required, 
      this.noIgual.bind(this.forma)]) //El bing especifica quien va a ser this al momento de llamar la funcion
    //setValue de un objeto completo
    //this.forma.setValue(this.usuario)

    //this.forma.controls['username'].valueChanges para obtener los cambios de un campo es especifico
    //si cambio valuechanges por statuschange muestra el status de cada campo
    this.forma.valueChanges.subscribe(
      data => {
        console.log(data)
      }
    )
  }

  ngOnInit() {
  }

  guardarCambios(){
    //reset reinicia los campos del formulario
    this.forma.reset({
      'nombrecompleto':{
        'nombre': '',
        'apellido': ''  
      },
      'correo':''
    })
  }

  agregarPasatiempo(){
    //Agregar nuevos FormControl
    (<FormArray>this.forma.controls['pasaTiempos']).push(
      new FormControl('dormir', Validators.required)
    )
  }

  noPerdomo(control: FormControl): {[s:string]:boolean}{
    if(control.value == "perdomo"){
      return{
        noPerdomo:true
      }
    } 
    return null;
  }

  noIgual(control: FormControl): {[s:string]:boolean}{
    let forma:any = this
    if(control.value !== forma.controls['password1'].value){
      return{
        noiguales:true
      }
    }
    return null;
  }

  existeUsuario(control: FormControl): Promise<any>{
    let promesa = new Promise(
      (resolve, reject)=>{
        setTimeout(()=>{
          if(control.value === "strider"){
            resolve({existe:true})
          }else{
            resolve(null)
          }
        }, 3000)
      }
    )
    return promesa;
  }
}
