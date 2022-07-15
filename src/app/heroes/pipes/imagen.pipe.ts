import { Pipe, PipeTransform } from "@angular/core";
import { HeroeInterface } from '../interfaces/heroes.interface';

@Pipe({
    name:"imagen",
    //Nos establece el pipe en impuro, hace que se vuelva a procesar el pipe cada vez que angular realice un cambio
    //pure:false
    //Ademas consume más recuros
})

export class ImagenPipe implements PipeTransform{

    transform(heroe: HeroeInterface):string {
        

        
            //assets/heroes/{{heroe.id}}.jpg"
            //Si no tiene el un id, ejemplo en la creacion
            //debugger;
            if(heroe.alt_img===''){
                return 'assets/no-image.png';
            }else if(!heroe.id && !heroe.alt_img ){         
                return 'assets/no-image.png';
            }else if( heroe.alt_img){
                return heroe.alt_img;
            }else{     
                return  `assets/heroes/${heroe.id}.jpg`;
            }
           
        

        /* if(!heroe.id && !heroe.alt_img){
            //error
            return "assets/no-image.png";
        }else if(heroe.alt_img){
            return heroe.alt_img
        }else{
            return `assets/heroes/${heroe.id}.jpg`
        } */

        
    }

}