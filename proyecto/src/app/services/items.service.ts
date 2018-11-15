import { Subject } from 'rxjs';
import { Item } from '../shared/item.model';

export class ItemsService {
    itemsChanged = new Subject<Item[]>();
}
