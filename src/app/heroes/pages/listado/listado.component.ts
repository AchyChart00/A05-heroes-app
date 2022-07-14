import {Component} from "@angular/core";
import { HeroeInterface } from "../../interfaces/heroes.interface";
import { HeroesService } from '../../services/heroes.service';

@Component({
    selector:"app-listado-component",
    templateUrl:"./listado.component.html",
    styles:[]
})

export class ListadoComponent{

    
    heroes:HeroeInterface[]=[];
    //importamos servicios 
    constructor(private heroesService:HeroesService){

    }

    ngOnInit():void{
        this.heroesService.getHeroes().subscribe(resp=> {
           this.heroes = resp;
           console.log(this.heroes);
        })
        //this.heroesService.getHeroes().subscribe(console.log)
    }
    
    
}