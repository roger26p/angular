import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica';
  
  template_literal:String
  f_parametros_opcionales:String
  f_flechas:Number
  destructuracion_objeto:any
  destructuracion_array:any
  ejemplo_interface:String

  ngOnInit() {
    //Template Literal
    let nombre = "Roger"
    let apellido = "Perdomo"
    let edad = 23
    this.template_literal = `Hola ${nombre} ${apellido} ${edad}`

    //Funcion parametros opcional
    function activar(nombre:String, momento?:String){
      let resultado

      if(momento){
        resultado = `${nombre} activo la funcion en la ${momento}` 
      }
      else{
        resultado = `${nombre} activo la funcion` 
      }
      
      return resultado
    }
    this.f_parametros_opcionales = activar("Roger", "Mañana")

    //Funcion de flechas
    let miFunction = (a:number, b:number) => a+b
    this.f_flechas = miFunction(3,6)

    //Destucturacion de objetos
    let d_objeto = {
      d_nombre:"Roger",
      d_apellido:"Perdomo",
      d_edad:23
    }
    
    let {d_nombre,d_apellido,d_edad} = d_objeto
    this.destructuracion_objeto = `Esto es una destructuracion de objeto y estos son sus datos ${d_nombre}, ${d_apellido}, ${d_edad}`    
  
    //Destructuracion de array
    let d_array:string[] = ["Roger", "David", "Perdomo", "Lopez"]
    let [primer_nombre, segundo_nombre, primer_apellido, segundo_apellido] = d_array
    this.destructuracion_array =  `Esto es una destructuracion de array y estos son sus datos ${primer_nombre}, ${segundo_nombre}, ${primer_apellido}, ${segundo_apellido}`
  
    //Promesas
    let promesa = new Promise(function(resolve, reject){
      setTimeout(()=>{
        resolve()
        reject()
      },1500)
    })

    //then recibe dos funciones resolve o reject
    promesa.then(function(){
      console.log("se ejecuto bien la promesa")
    },
    function(){
      console.log("se ejecuto mal la promesa")
    })

    //Interface
    interface Detalles{
      nombre:String,
      apellido:String
    }

    let persona:Detalles = {
      nombre:"Roger",
      apellido:"Perdomo"
    }

    function ver_persona(persona:Detalles){
      let datos_persona = `Hola soy ${persona.nombre} ${persona.apellido}, y estoy en una interface`
      return datos_persona
    }

    this.ejemplo_interface=ver_persona(persona)
    
    //Examen
    
    // Uso de Let y Const
    let nombre_examen:string = "Ricardo Tapia";
    let edad_examen:number = 23;
    const PERSONAJE = {
      nombre: nombre,
      edad: edad
    };
    
    // Cree una interfaz que sirva para validar el siguiente objeto
    interface Validacion{
      nombre:String,
      artesMarciales:String[]
    } 
    
    var batman:Validacion = {
      nombre: "Bruno Díaz",
      artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
    }
    
    function interface_examen(batman:Validacion){
      let texto_interface = `Hola soy ${batman.nombre} y se pelear ${batman.artesMarciales["2"]}`
      return texto_interface
    }

    console.log("Respuesta-1 "+interface_examen(batman))

    
    // Convertir esta funcion a una funcion de flecha
    function resultadoDoble( a, b ){
      return (a + b) * 2
    }
    let resultadoDoble2 = (a:number, b:number) => (a+b)*2
    console.log("Respuesta-2 "+resultadoDoble2(5,5))

    
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = "arco"
    function getAvenger( nombre:String, poder?:String, arma:String = "arco"){
      var mensaje;
      if( poder ){
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
      }else{
        mensaje = nombre + " No tiene poder"
      }
      return mensaje
    };
    console.log(getAvenger("Roger", "correr"))
    
    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.

    class Rectangulo{
      base:number
      altura:number

      //El :number le dice a la funcion que tiene que retornar un numero
      calcular():number{
        return this.base*this.altura
      }
    }  

    //Directivas estructurales son funciones que hacen cambio en el html por ejemplo: *ngif, *ngfor.

    //Para crear Componentes se utiliza ng generate component /carpeta_donde_quieres_guardarlo/nombre_del_componente

    //El directorio asset es donde va el contenido estatico (Imagenes, Librerias, entre otros)

    //Se puede instalar el bootstarp con el comando npm install bootstrap o tambien con el cdn que es como lo tengo actualmente
  
    //Los @input significa que pueden traer informacion de afuera 
  }
}
