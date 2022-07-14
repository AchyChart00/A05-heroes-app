import {Component, OnInit} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs";
import { HeroesService } from '../../services/heroes.service';
import { HeroeInterface } from '../../interfaces/heroes.interface';

@Component({
    selector:"app-heroe-component",
    templateUrl:"./heroe.component.html",
    styles:[
        `
        img{
            width:100%;
            border-radius:5px
        }
        `
    ]
})

export class HeroeComponent implements OnInit{

    heroe!:HeroeInterface;

    constructor(
        private activatedRoute: ActivatedRoute,
        private heroesService:HeroesService,
        //creamos la variable router para navegar entre nuestras rutas
        private router:Router
    ){

    }

    ngOnInit(): void {
        //id del heroe
        //y mostrarlo en consola


            this.activatedRoute.params.
                pipe(
                    switchMap(({id})=>this.heroesService.getHeroePorId(id))
                )
                .subscribe(heroe => {
                this.heroe=heroe;
              })


               /* this.activatedRoute.params
      .subscribe(({id})=>{
        console.log(id);

        this.paisService.getPaisPorAlpha(id)
          .subscribe(pais=>{
            console.log(pais);
          });
      }) */
    }

    regresar(){
        //router.navigate nos permite navegar a heroes/listado
        this.router.navigate(["/heroes/listado"])
    }

}