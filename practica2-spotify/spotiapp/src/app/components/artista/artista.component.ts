import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { SpotifyService } from 'src/app/sercices/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artistas:any = {}
  loading:Boolean
  Toptracks:any[] = []

  constructor(private router: ActivatedRoute, private spotify:SpotifyService) {
    this.router.params.subscribe(params => {
      this.getArtista(params['id'])
      this.getTopTracks(params['id'])
    })
   }

  ngOnInit() {
  }

  getArtista(id:string){
    this.loading=true
    this.spotify.buscar_artista(id)
      .subscribe(artista => {
        this.loading=false
        this.artistas=artista
      })
  }

  getTopTracks(id:string){
    this.spotify.buscar_top_tracks(id)
      .subscribe(tracks => {
        this.Toptracks = tracks
        console.log(tracks)
      })
  }
}
