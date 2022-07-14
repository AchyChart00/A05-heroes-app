//Si quisiera este servicio solo en el modulo solo lo importo en este modulo de heroes
//si lo quiero de manera global sería en un modulo más externo
import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { HeroeInterface } from "../interfaces/heroes.interface";
import { Observable } from "rxjs";
import { environment } from '../../../environments/environment';


@Injectable({
    //esta propiedad permite que nuestro servicio este disponible en cualquier parte de nuestro proyecto
    providedIn:"root"
})

export class HeroesService{

    //importo la propiedad del objeto de desarrollo que contiene las variables de entorno
    private baseUrl:string=environment.baseUrl;

    //luego importamos o injectamos el servicio HttpClient para poder hacer peticiones http 
    constructor(private http:HttpClient){

    }

    /* retornamos este observable donde queramos */
    getHeroes():Observable<HeroeInterface[]>{
        return this.http.get<HeroeInterface[]>(`${this.baseUrl}/heroes`);
    }

    getHeroePorId(id:string):Observable<HeroeInterface>{
        return this.http.get<HeroeInterface>(`${this.baseUrl}/heroes/${id}`);
    }

    getSugerencias(termino:string):Observable<HeroeInterface[]>{
        return this.http.get<HeroeInterface[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`); 
    }

}