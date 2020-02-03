import { Component, OnInit } from '@angular/core';
import { ListasService } from 'src/app/service/listas.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/models/listas.model';
import { ListaItem } from 'src/app/models/listas-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista:Lista;
  nombreItem='';

  constructor(private listaServise: ListasService, private route:ActivatedRoute) { 
    const listaId = this.route.snapshot.paramMap.get('id')
    
    this.lista = listaServise.obtenerLista(listaId)
  }

  ngOnInit() {
  }

  agregarItem(){
    if(this.nombreItem.length === 0){
      return;
    }

    const nuevoItem = new ListaItem(this.nombreItem)
    this.lista.items.push(nuevoItem)
    this.nombreItem = '';
    this.listaServise.guardarStorage();
  }

  cambioCheck(item:ListaItem){
    const pendientes = this.lista.items.filter(itemData => !itemData.completado).length;
    console.log({pendientes})

    if(pendientes === 0){
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true
    }else{
      this.lista.terminadaEn = null;
      this.lista.terminada = false 
    }
    this.listaServise.guardarStorage();
  }

  borrar(i:number){
    this.lista.items.splice(i,1)
    this.listaServise.guardarStorage();
  }

}
