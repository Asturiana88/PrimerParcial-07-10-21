import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Producto } from '../clases/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  rutaDeLaColeccion = '/producto';
  referenciaAlaColeccion: AngularFirestoreCollection<Producto>;

  constructor(private bd: AngularFirestore) {
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
  }

  altaProducto(producto: Producto): Promise<DocumentReference<Producto>> {
    return this.referenciaAlaColeccion.add({ ...producto });
  }

  listaProductos(): Observable<Producto[]> {
    return this.referenciaAlaColeccion.valueChanges();
  }
}
