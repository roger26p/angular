import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1'
  private apiKey = 'AIzaSyAh-4SKzWi6MEDXBSzJqgx-_Cj6Eva3N2M'

  userToken:string

  constructor(private http:HttpClient) { 
    this.leerToken()
  }

  //Crear usuarios
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //Login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  logout(){
    localStorage.removeItem('token')
  }

  login(usuario:UsuarioModel){
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}/accounts:signInWithPassword?key=${this.apiKey}`, authData
    ).pipe(
      map(resp =>{
        this.guardarToken(resp['idToken'])
        return resp
      })
    )
  }

  nuevoUsuario(usuario:UsuarioModel){
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}/accounts:signUp?key=${this.apiKey}`, authData
    ).pipe(
      map(resp =>{
        this.guardarToken(resp['idToken'])
        return resp
      })
    )
  }

  private guardarToken(idToken:string){
    this.userToken = idToken
    localStorage.setItem('token', idToken)
  }

  leerToken(){
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token')
    }else{
      this.userToken=""
    }
    return this.userToken
  }

  estaAutenticado():boolean{
    return this.userToken.length>2;
  }

}
