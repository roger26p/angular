import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html'
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private router:ActivatedRoute) {
    this.router.parent.params.subscribe(parametros => { //con parent hace que toda las rutas hijas reciban el parametro que se le envio al padre
      console.log("ruta hija nuevo")
      console.log(parametros)
    })
  }

  ngOnInit() {
  }

}
