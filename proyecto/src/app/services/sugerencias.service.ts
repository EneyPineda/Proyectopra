import { Injectable } from '@angular/core';
import { Sugerencia } from '../shared/sugerencia.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})

export class SugerenciasService {
    sugerencia: Sugerencia;
    constructor(private firestore: AngularFirestore) { }
}
