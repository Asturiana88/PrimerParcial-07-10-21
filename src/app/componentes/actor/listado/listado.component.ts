import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from 'src/app/clases/actor';
import { ActoresService } from 'src/app/servicio/actores.service';

@Component({
  selector: 'app-listado-actor',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Output() seleccionarActor = new EventEmitter<Actor>();
  seleccionado?:Actor;
  actores: Observable<Actor[]> = this.actorService.ListarActor();
  constructor(private actorService: ActoresService) { }

  ngOnInit(): void { }

  handleClick(value:Actor){
    this.seleccionado = value;
    this.seleccionarActor.emit(value)
  }

}
