import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/clases/pais';
import { Producto } from 'src/app/clases/producto';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-altaproducto',
  templateUrl: './altaproducto.component.html',
  styleUrls: ['./altaproducto.component.css']
})
export class AltaproductoComponent implements OnInit {

  producto:Producto = new Producto()

  constructor(private actorService: ProductoService , private router: Router) { }

  ngOnInit(): void {
  }

  seleccionarPais(value:Pais){
    this.producto.pais = value;
  }

  altaProducto(){
    if (
      this.producto.pais?.nombre &&
      this.producto.codigo &&
      this.producto.descripcion &&
      this.producto.precio &&
      this.producto.stock
    ){
      this.actorService.altaProducto(this.producto).then(res => this.router.navigate(['producto', 'listado']))
    }
  }

}
