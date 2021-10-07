import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/clases/producto';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-listadoproductos',
  templateUrl: './listadoproductos.component.html',
  styleUrls: ['./listadoproductos.component.css']
})
export class ListadoproductosComponent implements OnInit {

  prodSelec?: Producto;
  productos: Observable<Producto[]> = this.prodService.listaProductos();
  constructor(private prodService: ProductoService) { }

  ngOnInit(): void { }

  handleClick(producto:Producto){
    this.prodSelec = producto
  }
}
