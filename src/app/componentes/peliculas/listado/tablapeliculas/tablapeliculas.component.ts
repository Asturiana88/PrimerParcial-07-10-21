import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tablapeliculas',
  templateUrl: './tablapeliculas.component.html',
  styleUrls: ['./tablapeliculas.component.css']
})
export class TablapeliculasComponent implements OnInit {
  @Input() peliculas?: Pelicula[] | null;
  @Input() ocultarId: boolean=false;
  @Output() seleccionarPelicula = new EventEmitter<Pelicula>();
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(value:Pelicula){
    console.log(value);
    this.seleccionarPelicula.emit(value)
  }

}
