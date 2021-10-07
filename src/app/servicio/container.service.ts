import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Container } from '../clases/container';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  rutaDeLaColeccion = '/container';
  referenciaAlaColeccion: AngularFirestoreCollection<Container>;
  
  constructor(private bd: AngularFirestore) {
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
  }

  altaContainer(container: Container): Promise<DocumentReference<Container>> {
    return this.referenciaAlaColeccion.add({ ...container });
  }

  listadoContainer(): Observable<Container[]> {
    return this.referenciaAlaColeccion.valueChanges();
  }
}
