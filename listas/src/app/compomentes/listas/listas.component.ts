import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ListasService } from 'src/app/service/listas.service';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/listas.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  listas:any[]=[];

  @ViewChild (IonList) lista:IonList   //Busca un elemeto en el html
  @Input() terminada = true

  constructor(public listasService:ListasService, private router:Router, private alertCtrl: AlertController) { 
    this.listas=this.listasService.listas;
  }

  ngOnInit() {}

  listaSeleccionada(lista:Lista){
    if(this.terminada){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
  }

  borra_lista(lista:Lista){
    this.listasService.borrarLista(lista)
  }

  async update_title(lista:Lista){
    const alert = await this.alertCtrl.create({
      header: 'Modificar lista',
      inputs: [
        {
          name:'titulo',
          type:'text',
          value: lista.titulo,
          placeholder:'Nombre de la lista'
        }
      ],
      buttons: [{
          text:'Cancelar',
          role:'cancel',
          handler:()=>{
            console.log('Cancelar');
          }
        },
        {
          text:'Modificar',
          handler:(data)=>{
            console.log(data);
            if (data.titulo.length === 0){
              return;
            }

            lista.titulo = data.titulo;
            this.listasService.guardarStorage();
            this.lista.closeSlidingItems()
          }          
        }
      ]
    });

    alert.present();
  }

}
