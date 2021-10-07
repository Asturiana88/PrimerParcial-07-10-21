import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/pais';
import { ActoresService } from 'src/app/servicio/actores.service';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

  actor:Actor = new Actor()

  constructor(private actorService: ActoresService , private router: Router) { }

  ngOnInit(): void {
  }

  seleccionarPais(value:Pais){
    this.actor.pais = value;
  }

  altaActor(){
    if (
      this.actor.pais &&
      this.actor.nombre &&
      this.actor.apellido &&
      this.actor.edad
    ){
      this.actorService.AltaActor(this.actor).then(res => this.router.navigate(['actor', 'listado']))
    }
  }

}
