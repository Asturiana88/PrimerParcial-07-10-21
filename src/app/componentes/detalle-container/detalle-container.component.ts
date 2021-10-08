import { Component, Input, OnInit } from '@angular/core';
import { Container } from 'src/app/clases/container';

@Component({
  selector: 'app-detalle-container',
  templateUrl: './detalle-container.component.html',
  styleUrls: ['./detalle-container.component.css']
})
export class DetalleContainerComponent implements OnInit {

  @Input() container!: Container
  constructor() { }

  ngOnInit(): void {
  }

}
