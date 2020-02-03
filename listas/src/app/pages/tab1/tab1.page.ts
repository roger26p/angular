import { Component } from '@angular/core';
import { ListasService } from 'src/app/service/listas.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listas:any[]=[];
  
  constructor(public listasService:ListasService, private router:Router, private alertCtrl: AlertController){
    this.listas=this.listasService.listas;
  }

  async AgregarItem(){
    //this.router.navigateByUrl('/tabs/tab1/agregar');
    const alert = await this.alertCtrl.create({
      header: 'Nueva lista',
      inputs: [
        {
          name:'titulo',
          type:'text',
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
          text:'Crear',
          handler:(data)=>{
            console.log(data);
            if (data.titulo.length === 0){
              return;
            }

            const lista_id = this.listasService.crearLista(data.titulo)
            this.router.navigateByUrl(`/tabs/tab1/agregar/${lista_id}`);
          }          
        }
      ]
    });

    alert.present();
  }
}
