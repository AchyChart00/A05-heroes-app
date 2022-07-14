import { Component } from '@angular/core';
import { HeroeInterface } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { Observable } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar-component',
  templateUrl: './buscar.component.html',
})
export class BuscarComponent {
  termino: string = '';
  heroes: HeroeInterface[] = [];
  heroeSeleccionado!: HeroeInterface |undefined;

  //Cualquier interacción con nuestro servicio lo hacemos declarando esta variable privada.
  constructor(private heroesService: HeroesService) {}

  buscando() {
    this.heroesService
      .getSugerencias(this.termino.trim())
      .subscribe((heroes) => (this.heroes = heroes));
  }

  opctionSeleccionada(e: MatAutocompleteSelectedEvent) {

    if(!e.option.value){
        this.heroeSeleccionado=undefined;
        return console.log("No hay valor");
    }
    
    const heroe: HeroeInterface = e.option.value;
    
    this.termino = heroe.superhero;

    this.heroesService
      .getHeroePorId(heroe.id!)
      .subscribe((heroe) => (this.heroeSeleccionado = heroe));
  }
}
