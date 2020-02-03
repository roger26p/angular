import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, Heroe} from '../servicios/heroes.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:any = {}

  constructor(private activateRoute:ActivatedRoute, private _heroService:HeroesService) { 
    this.activateRoute.params.subscribe(params=>{
      this.heroe = this._heroService.getHeroe(params['id'])
    })
  }

  ngOnInit() {
  }

}
