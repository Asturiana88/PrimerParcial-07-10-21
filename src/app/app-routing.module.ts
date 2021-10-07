import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { AltaComponent as AltaPelicula } from './componentes/peliculas/alta/alta.component';
import { AltaComponent as AltaActor } from './componentes/actor/alta/alta.component';
import { ListadoComponent as ListadoActor} from './componentes/actor/listado/listado.component';
import { ListadoComponent as ListadoPelicula} from './componentes/peliculas/listado/listado.component';
import { ActorpeliculaComponent } from './componentes/actorpelicula/actorpelicula.component';
import { LoginComponent } from './componentes/login/login.component';
import { AltaproductoComponent } from './componentes/altaproducto/altaproducto.component';
import { ListadoproductosComponent } from './componentes/listadoproductos/listadoproductos.component';
import { CanActivateService } from './servicio/can-activate.service';

const routes: Routes = [
  {path: "busqueda", component: BusquedaComponent},
  {path: "pelicula/alta", component: AltaPelicula},
  {path: "actor/alta", component: AltaActor},
  {path: "actor/listado", component: ListadoActor},
  {path: "pelicula/listado", component: ListadoPelicula},
  {path: "actorpelicula", component: ActorpeliculaComponent},
  {path: "login", component: LoginComponent},
  {path: "alta-producto", component: AltaproductoComponent},
  {path: "listado-producto", component: ListadoproductosComponent, canActivate:[CanActivateService]},
  {path: "**", component: BienvenidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
