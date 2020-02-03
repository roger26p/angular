import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {map} from 'rxjs/operators' // map trasforma la data que recibes de la api y se ajusta a lo que quieres ver

@Injectable({
  providedIn: 'root'  //Forma automatica de importar servicios (por ejemplo en el app.module.ts)
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    
   }

   get_query(query:string){

    const url = `https://api.spotify.com/v1/${query}`

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBHQNCUoBn7Uc8nN1UjVEvQZoEFK1IRAop1dU4ZbdaY5mMTqHNSjqFUpZaoLjaU7c7esZn3t1-XHljKDyA'
    })

    return this.http.get(url, {headers})

   }

  nuevos_lanzamientos(){
    //Le paso la url a la funcion get_query esa funcion hace el llamado a la api y retorna a esta funcion todo el objeto
    //aqui lo recibi lo paso por el pipe y listo
    return this.get_query('browse/new-releases')
    .pipe(map(data => {
      return data['albums'].items
    }))

  }

  buscar_artistas(termino:string){
    return this.get_query(`search?q=${termino}&type=artist&limit=15`)
    .pipe(map(data=>{
      return data['artists'].items
    }))
  }

  buscar_artista(id:string){
    return this.get_query(`artists/${id}`)
  }


  buscar_top_tracks(id:string){
    return this.get_query(`artists/${id}/top-tracks?country=us`)
    .pipe(map(data=>{
      return data['tracks']
    }))
  }  
}
