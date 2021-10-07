import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Pelicula } from '../clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  rutaDeLaColeccion = '/pelicula';
  referenciaAlaColeccion: AngularFirestoreCollection<Pelicula>;
  
  constructor(private bd: AngularFirestore) {
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
  }

  AltaPelicula(pelicula: Pelicula): Promise<DocumentReference<Pelicula>> {
    return this.referenciaAlaColeccion.add({ ...pelicula });
  }

  ListarPeliculas(): Observable<Pelicula[]> {
    return this.referenciaAlaColeccion.valueChanges();
  }
}
