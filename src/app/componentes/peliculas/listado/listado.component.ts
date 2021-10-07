import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from 'src/app/clases/pelicula';
import { PeliculasService } from 'src/app/servicio/peliculas.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  peliculas: Observable<Pelicula[]> | null = this.peliculasService.ListarPeliculas();
  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    console.log(this.peliculas)
  }

}
