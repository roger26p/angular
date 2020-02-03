import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, Heroe} from '../servicios/heroes.service'


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  resultado:any[]=[]


  constructor(private activateRoute:ActivatedRoute, private _heroService:HeroesService) { 


  }

  ngOnInit() {

    this.activateRoute.params.subscribe(params=>{
      //this.heroe=params['heroe']
      this.resultado=this._heroService.getBuscarHeroes(params['heroe'])
      
    })    
  }

}
 