import {RouterModule, Routes } from '@angular/router' 
import {HomeComponent} from './seccion4/home/home.component'
import {SobreComponent} from './seccion4/sobre/sobre.component'
import {HeroesComponent} from './seccion4/heroes/heroes.component'
import {HeroeComponent} from './seccion4/heroe/heroe.component'
import {ResultadoComponent} from './seccion4/resultado/resultado.component'


const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'heroe/:id', component: HeroeComponent},
    {path: 'resultado/:heroe', component: ResultadoComponent},
    {path: '**', pathMatch: 'full', redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)