import {Component, Inject} from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { HeroeInterface } from '../../interfaces/heroes.interface';

@Component({
    selector:"app-confirmar-component",
    templateUrl:"./confirmar.component.html"
})

export class ConfirmarComponent{

    constructor(private dialogRef:MatDialogRef<ConfirmarComponent>,
                @Inject(MAT_DIALOG_DATA) public data: HeroeInterface,
        ){    }

    ngOnInit(){
        console.log(this.data);
    }

    borrar(){
        this.dialogRef.close(true);

    }

    cerrar(){
        this.dialogRef.close();
    }
}