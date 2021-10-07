import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Container } from 'src/app/clases/container';
import { ContainerService } from 'src/app/servicio/container.service';

@Component({
  selector: 'app-listado-container',
  templateUrl: './listado-container.component.html',
  styleUrls: ['./listado-container.component.css']
})
export class ListadoContainerComponent implements OnInit {

  containers: Observable<Container[]> = this.containerService.listadoContainer()
  newContainer = new Container();
  containerSeleccionado!: Container;

  constructor(private containerService: ContainerService) { }

  ngOnInit(): void {
  }

  crearContainer(){
    if(
      this.newContainer.capacidad &&
      this.newContainer.codigo &&
      this.newContainer.marca
    ){
      this.containerService.altaContainer(this.newContainer)
    }
  }

  seleccionarContainer(container:Container){
    this.containerSeleccionado = container
  }

}
