import { Component, OnInit } from '@angular/core';
import { Container } from 'src/app/clases/container';
import { ContainerService } from 'src/app/servicio/container.service';

@Component({
  selector: 'app-alta-container',
  templateUrl: './alta-container.component.html',
  styleUrls: ['./alta-container.component.css']
})
export class AltaContainerComponent implements OnInit {

  newContainer = new Container();
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
}
