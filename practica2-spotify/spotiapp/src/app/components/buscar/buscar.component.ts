import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/sercices/spotify.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  artistas:any[]=[]
  loading:Boolean

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino:string){
    this.loading=true
    this.spotify.buscar_artistas(termino)
      .subscribe((data:any)=>{
        console.log(data)
        this.artistas=data
        this.loading=false
      })
  }
}
