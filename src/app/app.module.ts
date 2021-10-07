import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { AltaComponent as AltaPeliculaComponent } from './componentes/peliculas/alta/alta.component';
import { AltaComponent as AltaActorComponent } from './componentes/actor/alta/alta.component';
import { ListadoComponent as ListadoPeliculas } from './componentes/peliculas/listado/listado.component';
import { ListadoComponent as ListadoActores} from './componentes/actor/listado/listado.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { FormsModule } from '@angular/forms';
 import { TablapeliculasComponent } from './componentes/peliculas/listado/tablapeliculas/tablapeliculas.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { DetallepeliculaComponent } from './componentes/detallepelicula/detallepelicula.component';
import {HttpClientModule} from '@angular/common/http';
import { TablapaisesComponent } from './componentes/tablapaises/tablapaises.component';
import { ActorpeliculaComponent } from './componentes/actorpelicula/actorpelicula.component';
import { DetalleActorComponent } from './componentes/detalle-actor/detalle-actor.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    AltaPeliculaComponent,
    AltaActorComponent,
    ListadoPeliculas,
    ListadoActores,
    TablapeliculasComponent,
    NavbarComponent,
    DetallepeliculaComponent,
    TablapaisesComponent,
    ActorpeliculaComponent,
    DetalleActorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
