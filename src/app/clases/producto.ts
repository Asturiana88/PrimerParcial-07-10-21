import { Pais } from "./pais";

export class Producto {
    codigo!:string;
    descripcion!:string;
    precio!:number;
    stock!:number;
    pais?:Pais;
    comestible:boolean=false;
}
