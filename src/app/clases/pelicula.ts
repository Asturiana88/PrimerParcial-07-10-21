import { Actor } from "./actor";
import { v4 as uuidv4 } from 'uuid';

export class Pelicula {
    id!:string;
    nombre!:string;
    tipo!:string;
    fechaEstreno!:string;
    cantidadPublico!:number;
    fotoPelicula!:string;
    actor!: Actor;

    constructor(){
        this.id = uuidv4();
    }
}
