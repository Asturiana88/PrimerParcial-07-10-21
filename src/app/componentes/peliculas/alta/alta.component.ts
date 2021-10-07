import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';
import { PeliculasService } from 'src/app/servicio/peliculas.service';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {
  pelicula = new Pelicula();

  constructor(private peliculaService : PeliculasService,
    private router: Router) { }

  ngOnInit(): void {
  }

  seleccionarActor(value: Actor){
    this.pelicula.actor = value
  }

  camposValidos(){
    return (
      this.pelicula.actor.nombre &&
      this.pelicula.nombre &&
      this.pelicula.cantidadPublico &&
      this.pelicula.fechaEstreno &&
      this.pelicula.fotoPelicula &&
      this.pelicula.tipo
    )
  }

  crearPelicula(){
    if (this.camposValidos()){
      this.peliculaService.AltaPelicula(this.pelicula).then(res => this.router.navigate(['pelicula', 'listado']))
    }
  }

}
