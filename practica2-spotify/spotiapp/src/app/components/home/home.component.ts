import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/sercices/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevos_lanzamientos:any[]=[]
  loading:Boolean

  constructor(private servicio:SpotifyService) {

    this.loading=true
    this.servicio.nuevos_lanzamientos()
    .subscribe((data:any) => {
      console.log(data)
      this.nuevos_lanzamientos = data
      this.loading=false
    })
    
   }

  ngOnInit() {
  }

}
