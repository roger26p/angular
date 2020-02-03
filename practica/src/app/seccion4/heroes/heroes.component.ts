import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../servicios/heroes.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[]

  constructor(private _heroesService:HeroesService, private router:Router) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes()
  }

  verHeroe(i:number){
    this.router.navigate(["/heroe",i])
  }

  datos_hijo(event):void{
    console.log("'Yo alimento a mi padre")
    console.log("Este es mi nombre:"+event.nombre)
    console.log("Este es mi apellido:"+event.apellido+"'")
  }


}
