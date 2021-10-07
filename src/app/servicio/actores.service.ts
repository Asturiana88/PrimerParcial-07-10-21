import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Actor } from '../clases/actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {
  rutaDeLaColeccion = '/actor';
  referenciaAlaColeccion: AngularFirestoreCollection<Actor>;
  
  constructor(private bd: AngularFirestore) {
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
  }

  AltaActor(actor: Actor): Promise<DocumentReference<Actor>> {
    return this.referenciaAlaColeccion.add({ ...actor });
  }

  ListarActor(): Observable<Actor[]> {
    return this.referenciaAlaColeccion.valueChanges();
  }
}