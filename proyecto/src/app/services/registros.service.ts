import { Subject } from "rxjs";
import { Registro } from "../shared/registro.model";

export class RegistrosSevice {
    registroChanged = new Subject<Registro[]>();

    private registros: Registro[]=[
        new Registro('', '')
    ]
    addRegistro(registro: Registro) {
        this.registros.push(registro);
        this.registroChanged.next(this.registros.slice());
    }
    getRegistros(){
        return this.registros.slice();
    }
    getRegistro(index: number){
        return this.registros[index];
    }
    onDelete(index: number){
        this.registros.splice(index,1);
        this.registroChanged.next(this.registros.slice());
    }
}