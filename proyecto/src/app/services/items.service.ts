import { Subject } from 'rxjs';
import { Item } from '../shared/item.model';
import { AngularFirestore } from '@angular/fire/firestore';

export class ItemsService {
    item: Item;
    constructor(private firestore: AngularFirestore) { }

    getItems() {
        return this.firestore.collection('Items').snapshotChanges();

    }
}
