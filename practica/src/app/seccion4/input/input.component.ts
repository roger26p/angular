import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  
  @Input() heroe:any={}
  @Output() PruebaArray = new EventEmitter();

  public nombre:{};

  constructor() { 
  }

  ngOnInit() {
    this.nombre = {nombre:"Roger", apellido:"Perdomo"};
  }

  hijo(event){
    this.PruebaArray.emit(this.nombre)
  }

}
