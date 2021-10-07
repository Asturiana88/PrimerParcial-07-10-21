import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/clases/pais';
import { PaisesService } from 'src/app/servicio/paises.service';

@Component({
  selector: 'app-tablapaises',
  templateUrl: './tablapaises.component.html',
  styleUrls: ['./tablapaises.component.css']
})
export class TablapaisesComponent implements OnInit {
  paises:Pais[]=[]
  paisesFiltrados:Pais[]=[]
  paisFiltro?:string;
  seleccionado?:Pais;

  @Output() seleccionarPais = new EventEmitter<Pais>();

  constructor(private servicioPaises: PaisesService) { }

  ngOnInit(): void {
    this.servicioPaises.getPaises()
    .subscribe((paises:any)=>{
      paises.map((pais:any) => {
        this.paises.push({
          nombre: pais.name?.common,
          bandera: pais.flags?.png
        })
      })
      this.paisesFiltrados = this.paises
    })
  }

  buscar(){
    this.paisesFiltrados = this.paises.filter(
      pais => pais.nombre?.toLowerCase().includes(this.paisFiltro?.toLowerCase() || '')
    )
  }

  handleClick(value:Pais){
    this.seleccionado = value;
    this.seleccionarPais.emit(value)
  }

}
