import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() items:any[]=[]

  constructor(private router:Router) { }

  ngOnInit() {
  }

  VerArtista(item:any){
    let artist_id

    if(item.type==='artist'){
      artist_id=item.id
    }
    else{
      artist_id=item.artists[0].id
    }

    this.router.navigate(['/artista', artist_id])

  }

}
