import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { PeliculasService } from 'src/app/servicio/peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  filtro?: string;
  peliculas!: Pelicula[];  
  peliculaSeleccionada?: Pelicula;  
  peliculasFiltradas!: Pelicula[];
  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculasService.ListarPeliculas().subscribe(
      peliculas => {
        this.peliculas = peliculas
        this.peliculasFiltradas = peliculas;
    })
  }

  filtrar(): void {
    this.peliculasFiltradas = this.peliculas.filter(
      pelicula => pelicula.nombre && pelicula.nombre.toLocaleLowerCase().includes(
        this.filtro?.toLowerCase() || ""
      )
    );
  }

  clear() :void {
    this.filtro = "";
    this.peliculasFiltradas = this.peliculas;
  }

  seleccionarPelicula(pelicula:Pelicula){
    this.peliculaSeleccionada = pelicula;
  }

}
