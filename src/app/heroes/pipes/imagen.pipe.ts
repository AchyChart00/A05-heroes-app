import { Pipe, PipeTransform } from "@angular/core";
import { HeroeInterface } from '../interfaces/heroes.interface';

@Pipe({
    name:"imagen"
})

export class ImagenPipe implements PipeTransform{

    transform(heroe: HeroeInterface):string {
        return `assets/heroes/${heroe.id}.jpg`
    }

}