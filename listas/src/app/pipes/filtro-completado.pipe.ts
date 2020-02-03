import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/listas.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false //cada vez que se haga un cambio se va a ejecutar el pipe
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: Lista[], completado: boolean): Lista[] {
    return listas.filter( lista =>lista.terminada === completado); //funcion de fecha que recorre la lista que se recibe y compara si lista.terminado es igual a completa que deberia ser true o false
  }

}
