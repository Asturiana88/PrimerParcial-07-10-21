import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';
import { PeliculasService } from 'src/app/servicio/peliculas.service';

@Component({
  selector: 'app-actorpelicula',
  templateUrl: './actorpelicula.component.html',
  styleUrls: ['./actorpelicula.component.css']
})
export class ActorpeliculaComponent implements OnInit {
  actorSeleccionado?:Actor;
  actorPeliculas?:Pelicula[];
  peliculas?:Pelicula[];
  constructor(private peliculaService:PeliculasService) { 

  }

  ngOnInit(): void {
    this.peliculaService.ListarPeliculas().subscribe(
      peliculas => {
        this.peliculas = peliculas;
    }) 
  }

  seleccionarActor(actor:Actor){
    this.actorSeleccionado = actor;
    this.actorPeliculas = this.peliculas?.filter(pelicula => {
      return (
       pelicula.actor?.nombre == this.actorSeleccionado?.nombre &&
       pelicula.actor?.apellido == this.actorSeleccionado?.apellido
      )
    })
  }

}
