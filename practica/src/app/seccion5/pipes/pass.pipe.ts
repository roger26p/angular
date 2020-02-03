import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pass'
})
export class PassPipe implements PipeTransform {

  transform(value: any, argumento1: boolean=true): any {

    if(argumento1){
      let salida:string=""
      for (var i = 0; i < value.length; i++) {
          salida += "*"
      }
      return salida;
    }
    else{
      return value
    }
  }

}
